/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
