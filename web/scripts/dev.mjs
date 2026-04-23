import { spawn } from "node:child_process";
import { createConnection, createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const nextCli = path.join(webRoot, "node_modules", "next", "dist", "bin", "next");
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

function assertPortFree(p) {
  return new Promise((resolve, reject) => {
    const s = createServer();
    s.once("error", reject);
    s.listen(p, "0.0.0.0", () => {
      s.close(() => resolve());
    });
  });
}

function waitForHttpPort(p, timeoutMs = 120_000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const attempt = () => {
      const socket = createConnection({ host: "127.0.0.1", port: p }, () => {
        socket.end();
        resolve();
      });
      socket.on("error", () => {
        socket.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(
            new Error(
              `Dev server did not open port ${p} within ${timeoutMs / 1000}s. Scroll up for errors.`,
            ),
          );
        } else {
          setTimeout(attempt, 400);
        }
      });
    };
    attempt();
  });
}

try {
  await assertPortFree(port);
} catch (err) {
  if (err && typeof err === "object" && "code" in err && err.code === "EADDRINUSE") {
    console.error(`
Port ${port} is already in use, so a new dev server cannot start.

  1. See what is listening:
       lsof -nP -iTCP:${port} -sTCP:LISTEN

  2. Stop it (replace PID from the list):
       kill PID

  3. Or use another port:
       PORT=3001 npm run dev

Then open http://127.0.0.1:${port} (or the PORT you chose).
`);
    process.exit(1);
  }
  throw err;
}

const child = spawn(process.execPath, [nextCli, "dev", "--webpack", "-p", String(port)], {
  stdio: "inherit",
  cwd: webRoot,
  env: { ...process.env },
});

let notified = false;
void waitForHttpPort(port)
  .then(() => {
    if (notified) return;
    notified = true;
    const primary = `http://localhost:${port}`;
    console.log(`\n  Open:   ${primary}`);
    console.log(`  (or)   http://127.0.0.1:${port}\n`);
    if (process.platform === "darwin") {
      spawn("open", [primary], { stdio: "ignore", detached: true }).unref();
    }
  })
  .catch((err) => {
    console.error(`\n${err.message}\n`);
  });

child.on("exit", (code, signal) => {
  if (signal) process.exit(1);
  process.exit(code ?? 0);
});
