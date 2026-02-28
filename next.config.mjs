/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio-01',
  assetPrefix: '/my-portfolio-01/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig