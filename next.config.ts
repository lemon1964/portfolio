/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
};

module.exports = nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
