/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol:'http',
        hostname:'localhost',
        port:'4001'
      }
    ]
  }
};

export default nextConfig;
