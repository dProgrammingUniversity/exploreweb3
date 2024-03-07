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
  { id: 11, name: 'SolanaPay2', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 12, name: 'Magic Eden2', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 13, name: 'Raydium2', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 14, name: 'Saber2', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 15, name: 'Solana Beach2', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 16, name: 'Solflare2', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 17, name: 'Sollet2', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 18, name: 'Solana Art2', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 19, name: 'Jupiter2', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 20, name: 'Wormhole2', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  { id: 21, name: 'SolanaPay3', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 22, name: 'Magic Eden3', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 23, name: 'Raydium3', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 24, name: 'Saber3', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 25, name: 'Solana Beach3', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 26, name: 'Solflare3', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 27, name: 'Sollet3', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 28, name: 'Solana Art3', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 29, name: 'Jupiter3', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 30, name: 'Wormhole3', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
  { id: 31, name: 'SolanaPay4', category: 'Finance', description: 'Payment gateway for Solana', status: 'live' },
  { id: 32, name: 'Magic Eden4', category: 'Games', description: 'NFT Marketplace on Solana', status: 'live' },
  { id: 33, name: 'Raydium4', category: 'Finance', description: 'Automated Market Maker on Solana', status: 'live' },
  { id: 34, name: 'Saber4', category: 'Finance', description: 'Cross-chain stablecoin exchange on Solana', status: 'live' },
  { id: 35, name: 'Solana Beach4', category: 'Analytics', description: 'Solana blockchain explorer', status: 'live' },
  { id: 36, name: 'Solflare4', category: 'Wallet', description: 'Non-custodial wallet for Solana', status: 'live' },
  { id: 37, name: 'Sollet4', category: 'Wallet', description: 'Web-based wallet for Solana', status: 'live' },
  { id: 38, name: 'Solana Art4', category: 'Games', description: 'NFT marketplace for Solana', status: 'live' },
  { id: 39, name: 'Jupiter4', category: 'Exchanges', description: 'top solana crypto dex', status: 'live' },
  { id: 40, name: 'Wormhole4', category: 'Multichain', description: 'Connects multiple chains together', status: 'live' },
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
