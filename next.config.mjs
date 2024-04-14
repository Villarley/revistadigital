/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      
      {
        protocol: "https",
        hostname: "apolonio.es",
      },
      {
        protocol: "https",
        hostname: "ney.one",
      },
      {
        protocol: "https",
        hostname: "image.slidesharecdn.com",
      },
      {
        protocol: "https",
        hostname: "slidebazaar.com",
      },
      {
        protocol: "https",
        hostname: "images.app.goo.gl",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "www.weareamundsen.com",
      },
    ],
  },
};

export default nextConfig;
