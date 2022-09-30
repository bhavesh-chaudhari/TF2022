/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    domains: [
      "res.cloudinary.com",
    ],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(withPWA(nextConfig));
