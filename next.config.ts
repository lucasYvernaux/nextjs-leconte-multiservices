import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.leconte-multiservices.fr" }],
        destination: "https://leconte-multiservices.fr/:path*",
        permanent: true,
      },
    ];
  },
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
