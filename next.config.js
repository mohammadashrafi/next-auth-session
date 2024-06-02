/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ghorbany.dev",
                port: "",
                pathname: "/static/media/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
        ],
    },

    async redirects() {
        return [
          {
            source: '/redirect',
            destination: 'http://localhost:3009',
            permanent: false,
            basePath: false
          },
        ]
      },
};

module.exports = nextConfig;
