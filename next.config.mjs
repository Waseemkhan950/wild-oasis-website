/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orcztkolkaxnuokiqtxr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
// output: "export", is used to export the app as a static site which can easily be deployed to any hosting provider.
// images.remotePatterns is used to allow Next.js to fetch images from a remote server.
