/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // 許可するドメインを追加
  },
};

module.exports = nextConfig;
