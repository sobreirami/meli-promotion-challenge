/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fastly.picsum.photos', 'http2.mlstatic.com'],
  },
  output: 'standalone',
};

export default nextConfig;
