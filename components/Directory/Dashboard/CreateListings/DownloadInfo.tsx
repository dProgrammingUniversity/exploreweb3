// /components/Directory/Dashboard/CreateListings/DownloadInfo.tsx
import React from 'react';

interface DownloadInfoProps {
  formData: {
    download_google_play_url: string;
    download_apple_app_store_url: string;
    download_solana_dapp_store_url: string;
    download_chrome_extension_url: string;
    download_website_url: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const DownloadInfo: React.FC<DownloadInfoProps> = ({ formData, handleInputChange, loading }) => (
  <>
    {/* Input for download_google_play_url */}
    <div className="flex flex-col">
      <label htmlFor="download_google_play_url" className="mb-2 capitalize text-purple-500 text-xl">Download (Android Google Play) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://play.google.com/store/apps/details?id=app.backpack.mobile</span>
      <input
        type="url"
        id="download_google_play_url"
        name="download_google_play_url"
        value={formData.download_google_play_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter download_google_play_url"
      />
    </div>

    {/* Input for download_apple_app_store_url */}
    <div className="flex flex-col">
      <label htmlFor="download_apple_app_store_url" className="mb-2 capitalize text-purple-500 text-xl">Download (Apple App Store) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://apps.apple.com/us/app/backpack-crypto-wallet/id6445964121</span>
      <input
        type="url"
        id="download_apple_app_store_url"
        name="download_apple_app_store_url"
        value={formData.download_apple_app_store_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter download_apple_app_store_url"
      />
    </div>

    {/* Input for download_chrome_extension_url */}
    <div className="flex flex-col">
      <label htmlFor="download_chrome_extension_url" className="mb-2 capitalize text-purple-500 text-xl">Download (Chrome Extension) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic</span>
      <input
        type="url"
        id="download_chrome_extension_url"
        name="download_chrome_extension_url"
        value={formData.download_chrome_extension_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter download_chrome_extension_url"
      />
    </div>

    {/* Input for download_solana_dapp_store_url */}
    <div className="flex flex-col">
      <label htmlFor="download_solana_dapp_store_url" className="mb-2 capitalize text-purple-500 text-xl">Download (Solana dApp Store) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://dappstore.solanamobile.com/appurl</span>
      <input
        type="url"
        id="download_solana_dapp_store_url"
        name="download_solana_dapp_store_url"
        value={formData.download_solana_dapp_store_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter download_solana_dapp_store_url"
      />
    </div>

    {/* Input for download_website_url */}
    <div className="flex flex-col">
      <label htmlFor="download_website_url" className="mb-2 capitalize text-purple-500 text-xl">Download (Website) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://backpack.app/downloads</span>
      <input
        type="url"
        id="download_website_url"
        name="download_website_url"
        value={formData.download_website_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter download_website_url"
      />
    </div>
  </>
);

export default DownloadInfo;
