// GitHub Actions sets GITHUB_ACTIONS=true automatically during CI builds.
// Locally (npm run dev / npm run build) this stays empty so the app still
// serves from the root, matching how it runs on your machine.
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/portfolio-website" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
