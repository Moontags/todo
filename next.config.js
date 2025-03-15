/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Varmistaa, että Next.js käyttää `src/app/` -rakennetta
  },
};

export default nextConfig;
