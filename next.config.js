/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 👈 Forces Next.js to generate the 'out' folder
  images: {
    unoptimized: true,        // 👈 Essential for S3 (disables server-side image optimization)
  },
  // We removed basePath/assetPrefix because CloudFront serves your site at the root domain.
}

module.exports = nextConfig;
