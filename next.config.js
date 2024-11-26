module.exports = require('next-plugin-preact')({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    scrollRestoration: true
  }
});
