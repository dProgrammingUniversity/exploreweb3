// /components/Dashboard/CreateListings/Projects/SupportInfo.tsx

import React from 'react';

const SupportInfo = ({ formData, handleInputChange, loading }) => (
  <>
    <div className="flex flex-col">
      <label htmlFor="support_website_url" className="mb-2 capitalize text-purple-500 text-xl">Support (Website) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploreweb3.xyz/support</span>
      <input
        type="text"
        id="support_website_url"
        name="support_website_url"
        value={formData.support_website_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_website_url"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="support_livechat_url" className="mb-2 capitalize text-purple-500 text-xl">Support (Livechat) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploreweb3.xyz/livechat</span>
      <input
        type="text"
        id="support_livechat_url"
        name="support_livechat_url"
        value={formData.support_livechat_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_livechat_url"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="support_email" className="mb-2 capitalize text-purple-500 text-xl">Support (Email):</label>
      <span className="text-sm text-gray-400 mb-1">format support@exploreweb3.xyz</span>
      <input
        type="text"
        id="support_email"
        name="support_email"
        value={formData.support_email}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_email"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="support_discord_url" className="mb-2 capitalize text-purple-500 text-xl">Support (Discord) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://discord.gg/YwySjzW</span>
      <input
        type="text"
        id="support_discord_url"
        name="support_discord_url"
        value={formData.support_discord_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_discord_url"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="support_twitter_url" className="mb-2 capitalize text-purple-500 text-xl">Support (Twitter) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://x.com/ExploreSolXyz</span>
      <input
        type="text"
        id="support_twitter_url"
        name="support_twitter_url"
        value={formData.support_twitter_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_twitter_url"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="support_telegram_url" className="mb-2 capitalize text-purple-500 text-xl">Support (Telegram) URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://t.me/solana</span>
      <input
        type="text"
        id="support_telegram_url"
        name="support_telegram_url"
        value={formData.support_telegram_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter support_telegram_url"
      />
    </div>
  </>
);

export default SupportInfo;
