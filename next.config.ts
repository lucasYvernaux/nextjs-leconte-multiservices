import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.darty.com",
      },
      {
        protocol: "https",
        hostname: "qouclhpwqhhparcklfac.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
      // new URL(
      //   "https://qouclhpwqhhparcklfac.supabase.co/storage/v1/render/image/public/**"
      // ),
    ],
  },
};

export default nextConfig;
