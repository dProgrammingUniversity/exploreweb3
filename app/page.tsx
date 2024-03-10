// exploresol/app/pages.tsx
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Iframe from "react-iframe"; // import Iframe from react-iframe to render subscribe form


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block  text-center justify-center">
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
			
			<Iframe url="https://exploresol.substack.com/embed"
				width="480px"
				height="320px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				styles={{border: "1px solid #EEE", background: "white"}}
      		/>

			<div className="text-center mt-4 px-4">
			    <strong>TLDR:</strong> Join me in a personal EXPERIMENTAL exploration of the Solana ecosystem, <br/>where 100+ daily tweets are distilled into key discoveries, no token hype, just real gems.				
				<p>&quot;S&quot; EXPERIMENTAL journey is hands-on, community-driven.</p>
				<p>Ready for the &quot;S&quot; adventure? </p>
				<p>Your insights and contributions will shape this voyage.</p>
			    <p><em>Subscribe now and be part of the pioneering &quot;S&quot; community.</em></p>
			</div>

			<div className="text-center mt-4  mx-auto">
      			<p className="text-sm text-gray-600">
      				🚀 <strong>Notice:</strong> 
					<br/>
					This is an EXPERIMENTAL (Educational pupose-only) initiative born from a passion for the Solana ecosystem and the desire to stay updated 
					with its rapid growth. 
					<br/>
					Not a Financial/Trading/Investment Advice to double down on Solana ecosystem opportunities. 
					<br/>- Do Your Own Research (DYOR) & You will be responsible for your own actions because web3 is volatile!
					<br/>
					
      			</p>
      			<p className="text-sm text-gray-600 mt-4">
      				
      			</p>
      			<p className="text-sm text-gray-600 mt-4">
      			</p>
      			<p className="text-sm text-gray-600 mt-4">
      				
      			</p>
      		</div>

			<div className="mt-8 w-full max-w-4xl px-4">
				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-gray-100 p-6 rounded-lg shadow">
						<span className="text-orange-700 text-base">
							💌 EXPERIMENTAL &quot;S&quot; Daily!
						</span>
						<p className="text-gray-700 text-base">
						🚀 My mission 1 is to delve into 100+ Solana ecosystem tweets daily, carefully selecting the most 
								insightful updates (dApps, tools, DAOs, airdrops, grants, jobs and a lot more) to share with you while dropping them &quot;S&quot; with LOVE!
						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow">
						<span className="text-orange-700 text-base">
							💌 EXPERIMENTAL Solana Daily Newsletter!
						</span>
						<p className="text-gray-700 text-base">
							My mission 2 is to curate a newsletter summarizing these discoveries daily for interested Solana community subscribers. 
								<br/>
								The newsletter kick-starts with the first 10000 subscribers! So, if you are excited to dive deep into 
								Solana with us, hit subscribe.
						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow">
						<span className="text-orange-700 text-base">
							💡 EXPERIMENTAL Solana Directory!
						</span>
						<p className="text-gray-700 text-base">
						My mission 3 beyond newsletter, I am building a comprehensive directory for easy discovery of Solana&apos;s vast ecosystem offerings. 
						<br/>
						An EXPERIMENTAL effort to simplify access to the Solana ecosystem (dApps, tools, DAOs, airdrops, grants, jobs and a lot more) 
						- all handpicked, ensuring you do not miss out on gems. 

						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow">
						<span className="text-orange-700 text-base">
						✨ Your involvement shapes my EXPERIMENTAL journey!
						</span>
						<p className="text-gray-700 text-base">
							<br/>Subscribe to join the &quot;S&quot; community, contribute to the directory, and decide on new features as we evolve. 
								
							<br/>Together, we will navigate Solana&apos;s endless opportunities.
						</p>
					</div>
				</div>
      		</div>
		</section>
	);
}
