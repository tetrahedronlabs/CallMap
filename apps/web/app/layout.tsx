import { Toaster } from '@/components/ui/sonner';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import './globals.css';

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
			<body className={`${GeistSans.className} ${GeistMono.variable}`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
