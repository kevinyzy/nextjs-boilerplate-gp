import type { NextConfig } from "next";

// 1. 从vercel得到的原配置
// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// 2. 部署github pages需要使用的新配置
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // 静态导出模式
    distDir: 'dist',            // 明确指定输出目录为 dist（避免混淆）
    basePath: '/你的仓库名',     // 必须替换为实际仓库名，如 '/my-next-app'
    images: {
      unoptimized: true,        // GitHub Pages 必需
    },
  }
  
  module.exports = nextConfig
