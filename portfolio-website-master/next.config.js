/*/** @type {import('next').NextConfig} */
/*const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "images.unsplash.com",
        hostname:"unsplash.com",
      
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig

