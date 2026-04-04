import type { NextConfig } from "next";

// GitHub Pages (project site): NEXT_PUBLIC_BASE_PATH=/nombre-del-repo en el workflow de deploy.
// `output: "export"` no admite `headers()` en next.config; el hosting estático no los aplica igual.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
