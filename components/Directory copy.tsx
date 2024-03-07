"use client"
// Directory.tsx
import { useState } from 'react';

// Mock data for dApps, you can replace this with your actual data source
const dApps = [
  { id: 1, name: 'SolanaPay', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 2, name: 'Magic Eden', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 3, name: 'Raydium', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 4, name: 'Saber', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 5, name: 'Solana Beach', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 6, name: 'Solflare', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 7, name: 'Sollet', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 8, name: 'Solana Art', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 9, name: 'Jupiter', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 10, name: 'Wormhole', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  { id: 1, name: 'SolanaPay', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 2, name: 'Magic Eden', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 3, name: 'Raydium', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 4, name: 'Saber', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 5, name: 'Solana Beach', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 6, name: 'Solflare', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 7, name: 'Sollet', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 8, name: 'Solana Art', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 9, name: 'Jupiter', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 10, name: 'Wormhole', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  { id: 1, name: 'SolanaPay', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 2, name: 'Magic Eden', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 3, name: 'Raydium', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 4, name: 'Saber', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 5, name: 'Solana Beach', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 6, name: 'Solflare', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 7, name: 'Sollet', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 8, name: 'Solana Art', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 9, name: 'Jupiter', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 10, name: 'Wormhole', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  { id: 1, name: 'SolanaPay', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 2, name: 'Magic Eden', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 3, name: 'Raydium', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 4, name: 'Saber', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 5, name: 'Solana Beach', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 6, name: 'Solflare', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 7, name: 'Sollet', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 8, name: 'Solana Art', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 9, name: 'Jupiter', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 10, name: 'Wormhole', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  // Add more dApp data here...
];

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter dApps based on the search term
  const filtereddApps = dApps.filter((dApp) =>
    dApp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search for dApps..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filtereddApps.map((dApp) => (
          <div key={dApp.id} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-500">{dApp.name}</h3>
            <p className="text-gray-600">{dApp.description}</p>
            <p className="text-sm mt-2">
              <strong>Category:</strong> {dApp.category}
            </p>
            {/* You can add more dApp details here */}
          </div>
        ))}
      </div>
    </div>
  );
}
