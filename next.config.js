/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'https://discord-clone-udemy-42978.web.app',
      'https://discord-clone-udemy-42978.firebaseapp.com/',
    ], // 許可するドメインを追加
  },
  output: 'export',
};

module.exports = nextConfig;
