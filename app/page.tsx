import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Iframe from "react-iframe"; // import Iframe from react-iframe to render subscribe form

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Explore&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Solana Ecosystem&nbsp;</h1>
				<br />
				<h1 className={title()}>
					& 
					<br/>Discover Opportunities!
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Handpicked &quot;S&quot;, exclusive dApp updates, insights and opportunities await you:
				</h2>
			</div>

			{/* <div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
			<Iframe url="https://exploresol.substack.com/embed"
        width="480px"
        height="320px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        styles={{border: "1px solid #EEE", background: "white"}}
      />
		</section>
	);
}
