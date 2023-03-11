/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      cssProp: true
    },
    ssr: true
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
