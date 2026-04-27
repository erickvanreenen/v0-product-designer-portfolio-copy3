/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "v0-product-designer-portfolio-copy3.vercel.app" }],
        destination: "https://erickvanreenen.com/:path*",
        permanent: true,
      },
    ];
  },
}

export default nextConfig