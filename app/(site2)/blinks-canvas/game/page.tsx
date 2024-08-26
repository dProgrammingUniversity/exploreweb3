// /app/(site2)/blinks-canvas/game/page.tsx
import BlinksCanvas from "@/components/BlinksCanvas";
import { Metadata } from "next";
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
    "og:image":
      "https://exploreweb3.xyz/images/blinks/ExploreWeb3-Quiz-Game-image-01b-WITH-LOGO.jpg",
    "Content-Security-Policy": `
      default-src 'self'; 
      connect-src 'self' https://exploreweb3.xyz https://dial.to https://*.dial.to https://*.dial.to/* https://actions-registry.dial.to https://actions-registry.dial.to/all https://proxy.dial.to https://proxy.dial.to/?url=https://exploreweb3.xyz/api/actions/game https://proxy.dial.to/?url=https%3A%2F%2Fexploreweb3.xyz%2Fapi%2Factions%2Fgame https://dscvr.one https://*.dscvr.one https://api.dscvr.one https://api1.stg.dscvr.one https://*.helius-rpc.com; 
      script-src 'self' https://exploreweb3.xyz https://dial.to https://*.dial.to https://*.dial.to/* https://actions-registry.dial.to https://actions-registry.dial.to/all https://proxy.dial.to https://proxy.dial.to/?url=https://exploreweb3.xyz/api/actions/game https://proxy.dial.to/?url=https%3A%2F%2Fexploreweb3.xyz%2Fapi%2Factions%2Fgame https://dscvr.one https://*.dscvr.one https://api.dscvr.one https://api1.stg.dscvr.one https://*.helius-rpc.com; 
      style-src 'self' https://exploreweb3.xyz https://dial.to https://*.dial.to https://*.dial.to/* https://dscvr.one https://*.dscvr.one https://api.dscvr.one; 
      img-src 'self' https://exploreweb3.xyz https://dial.to https://*.dial.to https://*.dial.to/* https://dscvr.one https://*.dscvr.one https://api.dscvr.one data:; 
      font-src 'self' https://exploreweb3.xyz https://dial.to https://*.dial.to https://*.dial.to/* https://dscvr.one https://*.dscvr.one https://api.dscvr.one; 
      frame-src 'self'; 
    `,
  },
};

export default function BlinksPage() {
  const actionApiUrl = "https://exploreweb3.xyz/api/actions/game"; // Action URL for the game

  return (
    <main className="blink-container">
      <BlinksCanvas actionApiUrl={actionApiUrl} />
    </main>
  );
}
