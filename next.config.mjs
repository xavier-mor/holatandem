/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (smallest), fall back to WebP, then the source format.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised variants for 31 days on CDN / browser.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
