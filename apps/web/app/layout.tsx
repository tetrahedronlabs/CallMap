import { Toaster } from '@/components/ui/sonner';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
	title: { template: '%s | CallMap', default: 'CallMap' },
	description: 'The open-source platform for campus safety data.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Script
				strategy="lazyOnload"
				src="https://analytics.tetrahedron.dev/script.js"
				data-website-id="25fe5d84-b10b-4445-8d61-e048f30d4569"
			/>
			<body className={`${GeistSans.className} ${GeistMono.variable}`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
