/** @type {import('next').NextConfig} */

const nextConfig = {
  // This is the only line you needed from your config
  output: 'export', 
  
  // This is also good to keep for static exports
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig