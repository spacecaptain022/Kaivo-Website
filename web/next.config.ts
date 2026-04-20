import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Monorepo: include the correct root when tracing files on Vercel (workspace hoists deps to repo root).
  outputFileTracingRoot: path.join(path.dirname(fileURLToPath(import.meta.url)), ".."),
};

export default nextConfig;
