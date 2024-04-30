/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: () => [
		{
			source: '/docs',
			destination: 'https://docs.callmap.app/',
		},
		{
			source: '/docs/:match*',
			destination: 'https://docs.callmap.app/:match*',
		},
	],
};

export default nextConfig;
