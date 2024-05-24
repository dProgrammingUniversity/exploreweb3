// /components/Directory/Dashboard/CreateListings/ProjectInfo.tsx
import React from 'react';

const ProjectInfo = ({
  formData,
  handleInputChange,
  categories,
  selectedCategory1,
  setSelectedCategory1,
  selectedCategory2,
  setSelectedCategory2,
  selectedCategory3,
  setSelectedCategory3,
  selectedCategory4,
  setSelectedCategory4,
  selectedCategory5,
  setSelectedCategory5,
  loading,
  blockchainOptions,
  tokenomicOptions,
  nftcollectionOptions,
  governanceOptions,
  sourceCodeAccessOptions,
  pricingOptions,
  handleCategoryChange
}) => (
  <>
    

    <div className="col-span-full">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 1:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">main category must select 1 from the list and other categories 2-5 are optional</span>
      <select
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
        value={selectedCategory1 || ""}
        onChange={(e) => setSelectedCategory1(e.target.value)}
      >
        <option value="">Select Category 1</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="col-span-full">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 2 (optional):</label>
      <select
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
        value={selectedCategory2 || ""}
        onChange={(e) => setSelectedCategory2(e.target.value)}
      >
        <option value="">Select Category 2</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="col-span-full">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 3 (optional):</label>
      <select
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
        value={selectedCategory3 || ""}
        onChange={(e) => setSelectedCategory3(e.target.value)}
      >
        <option value="">Select Category 3</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="col-span-full">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 4 (Optional):</label>
      <select
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
        value={selectedCategory4 || ""}
        onChange={(e) => setSelectedCategory4(e.target.value)}
      >
        <option value="">Select Category 4</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="col-span-full">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 5 (optional):</label>
      <select
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
        value={selectedCategory5 || ""}
        onChange={(e) => setSelectedCategory5(e.target.value)}
      >
        <option value="">Select Category 5</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="pricing" className="mb-2 capitalize text-purple-500 text-xl">Pricing:</label>
      <span className="text-sm text-gray-400 mb-1">Freemium = Free+Premium options</span>
      <select
        id="pricing"
        name="pricing"
        value={formData.pricing || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Pricing</option>
        {pricingOptions.map((pricing) => (
          <option key={pricing} value={pricing}>
            {pricing}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="documentation_url" className="mb-2 capitalize text-purple-500 text-xl">Documentation URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/docs</span>
      <input
        type="text"
        id="documentation_url"
        name="documentation_url"
        value={formData.documentation_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter documentation URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="faq_url" className="mb-2 capitalize text-purple-500 text-xl">FAQs URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/faqs</span>
      <input
        type="text"
        id="faq_url"
        name="faq_url"
        value={formData.faq_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter FAQs URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="demo_url" className="mb-2 capitalize text-purple-500 text-xl">Video Demo URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://youtube.com/video</span>
      <input
        type="text"
        id="demo_url"
        name="demo_url"
        value={formData.demo_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter demo URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="roadmap_url" className="mb-2 capitalize text-purple-500 text-xl">Roadmap URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/roadmap</span>
      <input
        type="text"
        id="roadmap_url"
        name="roadmap_url"
        value={formData.roadmap_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter roadmap URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="whitepaper_url" className="mb-2 capitalize text-purple-500 text-xl">Whitepaper URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/whitepaper</span>
      <input
        type="text"
        id="whitepaper_url"
        name="whitepaper_url"
        value={formData.whitepaper_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter whitepaper URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="tokenomic" className="mb-2 capitalize text-purple-500 text-xl">Tokenomic:</label>
      <span className="text-sm text-gray-400 mb-1">does the project have token</span>
      <select
        id="tokenomic"
        name="tokenomic"
        value={formData.tokenomic || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Tokenomic</option>
        {tokenomicOptions.map((tokenomic) => (
          <option key={tokenomic} value={tokenomic}>
            {tokenomic}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="token_name" className="mb-2 capitalize text-purple-500 text-xl">Token Name:</label>
      <span className="text-sm text-gray-400 mb-1">ticker only like - Sol</span>
      <input
        type="text"
        id="token_name"
        name="token_name"
        value={formData.token_name}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter token name"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="nft_collection" className="mb-2 capitalize text-purple-500 text-xl">NFT Collection:</label>
      <span className="text-sm text-gray-400 mb-1">does the project have NFT collection</span>
      <select
        id="nft_collection"
        name="nft_collection"
        value={formData.nft_collection || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select NFT Collection</option>
        {nftcollectionOptions.map((nft_collection) => (
          <option key={nft_collection} value={nft_collection}>
            {nft_collection}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="nft_collection_url" className="mb-2 capitalize text-purple-500 text-xl">NFT Collection URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://tensor.trade/trade/nftname</span>
      <input
        type="text"
        id="nft_collection_url"
        name="nft_collection_url"
        value={formData.nft_collection_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter NFT collection URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="source_code_access" className="mb-2 capitalize text-purple-500 text-xl">Source Code Accessibility:</label>
      <span className="text-sm text-gray-400 mb-1">is the project code open source or not</span>
      <select
        id="source_code_access"
        name="source_code_access"
        value={formData.source_code_access || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Code Access</option>
        {sourceCodeAccessOptions.map((source_code_access) => (
          <option key={source_code_access} value={source_code_access}>
            {source_code_access}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="github_url" className="mb-2 capitalize text-purple-500 text-xl">GitHub URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://github.com/project/repo</span>
      <input
        type="text"
        id="github_url"
        name="github_url"
        value={formData.github_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter GitHub URL"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="blockchain" className="mb-2 capitalize text-purple-500 text-xl">Blockchain:</label>
      <span className="text-sm text-gray-400 mb-1">strictly Solana or multichain</span>
      <select
        id="blockchain"
        name="blockchain"
        value={formData.blockchain || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Blockchain</option>
        {blockchainOptions.map((blockchain) => (
          <option key={blockchain} value={blockchain}>
            {blockchain}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="governance" className="mb-2 capitalize text-purple-500 text-xl">Governance:</label>
      <span className="text-sm text-gray-400 mb-1">is it governed by a DAO or not</span>
      <select
        id="governance"
        name="governance"
        value={formData.governance || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Governance</option>
        {governanceOptions.map((governance) => (
          <option key={governance} value={governance}>
            {governance}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col col-span-full">
      <label htmlFor="short_description" className="mb-2 capitalize text-purple-500 text-xl">Short Description:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">minimum of 50 characters</span>
      <textarea
        id="short_description"
        name="short_description"
        value={formData.short_description}
        onChange={handleInputChange}
        disabled={loading}
        rows={5}
        maxLength={1000}
        style={{ minHeight: '50px', resize: 'vertical' }}
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
      />
    </div>

    <div className="flex flex-col col-span-full">
      <label htmlFor="full_description" className="mb-2 capitalize text-purple-500 text-xl">Full Description:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">minimum of 150 characters</span>
      <textarea
        id="full_description"
        name="full_description"
        value={formData.full_description}
        onChange={handleInputChange}
        disabled={loading}
        rows={20}
        maxLength={2000}
        style={{ minHeight: '80px', resize: 'vertical' }}
        className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
      />
    </div>

    {['pros', 'cons', 'use_case'].map((field) => (
      <div key={field} className="flex flex-col col-span-full">
        <label htmlFor={field} className="mb-2 capitalize text-purple-500 text-xl">{field.replace(/_/g, ' ')}</label>
        <span className="text-sm text-gray-400 mb-1">minimum of 50 characters and max of 300 characters</span>
        <textarea
          id={field}
          name={field}
          value={formData[field] || ""}
          onChange={handleInputChange}
          rows={3}
          maxLength={1000}
          className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
          placeholder={`Enter ${field.replace(/_/g, ' ')}`}
        />
      </div>
    ))}

    <div className="flex flex-col col-span-full">
      <label htmlFor="team" className="mb-2 capitalize text-purple-500 text-xl">Team:</label>
      <span className="text-sm text-gray-400 mb-1">solo founder or team name and social media</span>
      <textarea
        id="team"
        name="team"
        value={formData.team || ""}
        onChange={handleInputChange}
        rows={3}
        maxLength={1000}
        className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
        placeholder="Enter team details"
      />
    </div>
    
  </>
);

export default ProjectInfo;
