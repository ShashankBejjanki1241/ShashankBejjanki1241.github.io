/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // static export
  images: { unoptimized: true },    // needed for export
  trailingSlash: true,              // nicer static URLs
};
export default nextConfig;
