/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // Sourcemaps in production help when debugging from issue reports.
  productionBrowserSourceMaps: true,
  // The showcase calls api.ratesengine.net cross-origin in the browser
  // for SSE + uncached endpoints. Server-side fetches use the same host
  // via env so RSC requests can hit the origin directly.
  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.ratesengine.net',
  },
};

export default nextConfig;
