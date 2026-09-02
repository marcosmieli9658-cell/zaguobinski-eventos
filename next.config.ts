import type { NextConfig } from 'next';

// Explicit links carry the Pages prefix. assetPrefix avoids a vinext beta.8
// basePath regression in static prerendering.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  assetPrefix: '/zaguobinski-eventos',
  images: { unoptimized: true },
};

export default nextConfig;
