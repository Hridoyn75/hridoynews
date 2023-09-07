/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.jugantor.com'
          },
        ],
      },
}

module.exports = nextConfig
