import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from '@/lib/utils';

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Ethereum Referral Protocol",
	description: "Decentralized referral protocol on Ethereum",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					"flex flex-col min-h-screen antialiased"
				)}
			>
				<RootProvider>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
