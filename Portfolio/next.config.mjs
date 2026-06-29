/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML export — ideal for portfolio hosting on Vercel
  images: {
    unoptimized: true, // needed for static export
  },
};

export default nextConfig;
