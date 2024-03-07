import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next" // import SpeedInsights from Vercel
import { Analytics } from "@vercel/analytics/react" // import Analytics from Vercel

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	/**
	 * When run pnpm dev, the following error will occur:
	 * Unsupported metadata themeColor is configured in metadata export. Please move it to viewport export instead.
	 * So, I imported Viewport and created a new object called viewport "export const viewport" below and moved the themeColor to it.
	 * */	
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "white" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

// new viewport created to fix themeColor error above
export const viewport: Viewport = {
	
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	]
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							<SpeedInsights /> {/* SpeedInsights component from Vercel */}
							<Analytics /> {/* Analytics component from Vercel */}	
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="#"
								title="Superteam"
							>
								<span className="text-default-600">Subscribers:</span>
								<p className="text-primary">0</p>/ 100 &quot;S&quot; required to kick start this Experiment. Watch this space for update on this daily!
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
