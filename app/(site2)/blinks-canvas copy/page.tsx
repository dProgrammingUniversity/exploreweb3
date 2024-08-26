// /app/blinks-canvas/page.tsx
import BlinksCanvas from "@/components/BlinksCanvas";
import { Metadata } from 'next';
import BlinksCanvasLayout from "../../layout";
import "../../(site2)/blinks-canvas.css"; 

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
  return (
    <main className="blink-container">
    {/* // <main> */}
      <BlinksCanvas />
    {/* // </main> */}
    </main>
  );
}


