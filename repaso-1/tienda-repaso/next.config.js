/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  i18n: {
    locales: ["en-US", "es-ES", "pt-BR"],
    defaultLocale: "es-ES",
  },
}

module.exports = nextConfig
