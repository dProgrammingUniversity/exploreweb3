// /component/BlinksCanvas/index.tsx
"use client";

import '@dialectlabs/blinks/index.css';  // Importing default Blink styles
import { useState, useEffect } from 'react';
import { Action, Blink, type ActionAdapter, useActionsRegistryInterval } from "@dialectlabs/blinks";
// import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
// import { clusterApiUrl } from '@solana/web3.js';

const BlinksCanvas = () => {
  const [action, setAction] = useState<Action | null>(null);
  const actionApiUrl = 'https://exploreweb3.xyz/api/actions/game'; // Hardcoded action URL

  // Initiating the registry interval check
  const { isRegistryLoaded } = useActionsRegistryInterval();
  // const { adapter } = useActionSolanaWalletAdapter(clusterApiUrl('mainnet-beta'));

  useEffect(() => {
    if (isRegistryLoaded) {
      Action.fetch(actionApiUrl)
        .then(fetchedAction => {
          // fetchedAction.setAdapter(adapter); // Setting the adapter for the action
          setAction(fetchedAction);
        })
        .catch(console.error);
    }
  }, [isRegistryLoaded, actionApiUrl]);

  return isRegistryLoaded && action ? (
    <div>
      <Blink action={action} websiteText={new URL(actionApiUrl).hostname} stylePreset="x-dark" /> 
      {/* Apply the stylePreset here to use Dialect's x-dark styles */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BlinksCanvas;
