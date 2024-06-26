import { execSync } from "child_process";

const lastCommitCommand = "git rev-parse HEAD";
const buildId = execSync(lastCommitCommand).toString().trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: process.env.SITE_URL,
  },
  generateBuildId: () => buildId,
};

export default nextConfig;
