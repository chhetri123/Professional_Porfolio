/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... existing config ...

  async rewrites() {
    return [
      {
        source: "/content/:path*",
        destination: "/public/content/:path*",
      },
    ];
  },

  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
