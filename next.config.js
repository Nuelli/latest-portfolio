/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    module.exports = {
      reactStrictMode: true,
      eslint: {
        // Warning: Disabling rules here can affect code quality across the project
        ignoreDuringBuilds: true, // Optional: Ignore ESLint errors during build
        rules: {
          "react/no-unescaped-entities": "off", // Disables the rule
        },
      },
    };
    

    return config;
  },
}

module.exports = nextConfig
