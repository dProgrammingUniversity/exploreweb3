// /app/(site2)/blinks-canvas/game/page.tsx
import BlinksCanvas from "@/components/BlinksCanvas";
import { Metadata } from 'next';
import "../../../(site2)/blinks-canvas.css"; 

export const metadata: Metadata = {
  title: "Explore Web3 Blinks",
  description: "Render Solana Blinks Actions",
  openGraph: {
    title: "Explore Web3 Blinks",
    description: "Render Solana Blinks Actions",
  },
  other: {
    "dscvr:canvas:version": "vNext",
    "og:image": "https://exploreweb3.xyz/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
  },
};

export default function BlinksPage() {

  const actionApiUrl = 'https://exploreweb3.xyz/api/actions/game'; // Action URL for the game

  return (
    <main className="blink-container">
      <BlinksCanvas actionApiUrl={actionApiUrl} />
    </main>
  );
}


