import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Monorepo: include the correct root when tracing files on Vercel (workspace hoists deps to repo root).
  outputFileTracingRoot: path.join(path.dirname(fileURLToPath(import.meta.url)), ".."),
  // Next 16 blocks /_next dev assets when the browser host is 127.0.0.1 (different from "localhost").
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
