/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: "",
        pathname: "/**",
      }
    ]
  },
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es',
  }
};

export default nextConfig;
