// /pages/blinks-canvas2.tsx
import Head from 'next/head';
import BlinksCanvas from "@/components/BlinksCanvas";
import "./blinks-canvas.css"; // Import the custom CSS
import { useSearchParams } from 'next/navigation'; // Import the hook to get query parameters


export default function BlinksPage() {

  const searchParams = useSearchParams();
  // const actionApiUrl = 'https://exploreweb3.xyz/api/actions/game'; // Action URL for the game
  const actionApiUrl = searchParams.get('action') || 'https://exploreweb3.xyz/api/actions/game'; // Default to the hardcoded URL if none is provided

  return (
    <>
      <Head>
        <title>Explore Web3 Blinks</title>
        <meta name="description" content="Render Solana Blinks Actions" />
        <meta property="og:title" content="Explore Web3 Blinks" />
        <meta property="og:description" content="Render Solana Blinks Actions" />
        <meta name="dscvr:canvas:version" content="vNext" />
        <meta property="og:image" content="https://exploreweb3.xyz/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg" />
      </Head>
      <main className="blink-container">
        <BlinksCanvas actionApiUrl={actionApiUrl} />
      </main>
    </>
  );
}
