import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { cn } from '@/lib/utils';

const roboto_mono = Roboto_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
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
					roboto_mono.className,
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
