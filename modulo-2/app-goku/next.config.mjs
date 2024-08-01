/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dragonball-api.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
