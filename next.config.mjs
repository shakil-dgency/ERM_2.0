/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "cms.escaperoommarketer.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
