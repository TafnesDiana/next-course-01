

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.todamateria.com.br",
      },
      {
        protocol: "https",
        hostname: "**.mundoeducacao.uol.com.br",
      },
      {
        protocol: "https",
        hostname: "cultura.uol.com.br",
      },
      {
        protocol: "https",
        hostname: "**.brasilescola.uol.com.br",
      }
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
