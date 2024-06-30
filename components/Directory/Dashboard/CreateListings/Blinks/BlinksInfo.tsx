// /components/Directory/Dashboard/CreateListings/Blinks/ProjectInfo.tsx
import React from 'react';

const BlinksInfo = ({
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
  blinksRegistryStatusOptions,
  sourceCodeAccessOptions,
  handleCategoryChange
}) => (
  <>

  {/* Category 1 dropdown options */}
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

{/* Category 2 dropdown options */}
    <div className="flex flex-col">
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

{/* Category 3 dropdown options */}
    <div className="flex flex-col">
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

{/* Category 4 dropdown options */}
    <div className="flex flex-col">
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

{/* Category 5 dropdown options */}
    <div className="flex flex-col">
      <label className="mb-2 capitalize text-purple-500 text-xl">Category 5 (Optional):</label>
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

{/* Official Blinks Registry Status dropdown options */}
    <div className="flex flex-col">
      <label htmlFor="blinks_registry_status" className="mb-2 capitalize text-purple-500 text-xl">Official Blinks Registry Status:</label>
      <span className="text-sm text-gray-400 mb-1">Status of your blinks from Official Blinks Registry</span>
      <select
        id="blinks_registry_status"
        name="blinks_registry_status"
        value={formData.blinks_registry_status || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Registry Status</option>
        {blinksRegistryStatusOptions.map((blinks_registry_status) => (
          <option key={blinks_registry_status} value={blinks_registry_status}>
            {blinks_registry_status}
          </option>
        ))}
      </select>
    </div>

{/* Blinks Actions.json URL input box */}
    <div className="flex flex-col">
      <label htmlFor="blinks_actions_json_url" className="mb-2 capitalize text-purple-500 text-xl">Blinks Actions.json URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresolana.com/actions.json</span>
      <input
        type="text"
        id="blinks_actions_json_url"
        name="blinks_actions_json_url"
        value={formData.blinks_actions_json_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter blinks actions.json URL"
      />
    </div>

{/* Source code access dropdown options */}
    <div className="flex flex-col">
      <label htmlFor="source_code_access" className="mb-2 capitalize text-purple-500 text-xl">Source Code Accessibility:</label>
      <span className="text-sm text-gray-400 mb-1">is the project Blinks actions code open source or not</span>
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

    {/* Blinks Actions Repo url input box */}
    <div className="flex flex-col">
      <label htmlFor="blinks_actions_repo_url" className="mb-2 capitalize text-purple-500 text-xl">Blinks Actions Repo URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://github.com/project/repo</span>
      <input
        type="text"
        id="blinks_actions_repo_url"
        name="blinks_actions_repo_url"
        value={formData.blinks_actions_repo_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter blinks_actions_repo URL"
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

   



    <div className="flex flex-col col-span-full">
      <label htmlFor="short_description" className="mb-2 capitalize text-purple-500 text-xl">Short Description:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">minimum of 100 characters</span>
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
  </>
);

export default BlinksInfo;
