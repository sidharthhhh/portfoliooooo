// /** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = ''

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

// const nextConfig = {
//   output: 'export',
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig


// -----------------aws config---------------------

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