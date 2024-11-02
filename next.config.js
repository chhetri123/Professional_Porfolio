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
};

module.exports = nextConfig;
