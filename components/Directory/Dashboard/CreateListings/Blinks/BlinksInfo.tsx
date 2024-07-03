// /components/Directory/Dashboard/CreateListings/Blinks/BlinksInfo.tsx
import React, { useState } from 'react';

const BlinksInfo = ({
  formData,
  handleInputChange,
  statuses,
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
  handleCategoryChange,
}) => (
  <>

  
    {/* Name input */}
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 text-xl capitalize text-purple-500">
        Name:
      </label>
      <span className="mb-1 text-sm text-gray-400">max of 50 characters</span>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="rounded border-2 border-gray-300 bg-black p-2"
        disabled={loading}
        placeholder="Enter name"
      />
    </div>

    {/* Blinks URL input */}
    <div className="flex flex-col">
      <label
        htmlFor="blinks_url"
        className="mb-2 text-xl capitalize text-purple-500"
      >
        Blinks URL:
      </label>
      <span className="mb-1 text-sm text-gray-400">
        format https://exploresolana.com
      </span>
      <input
        type="text"
        id="blinks_url"
        name="blinks_url"
        value={formData.blinks_url}
        onChange={handleInputChange}
        className="rounded border-2 border-gray-300 bg-black p-2"
        disabled={loading}
        placeholder="Enter blinks url"
      />
    </div>

    {/* year created input */}
    <div key="year_founded" className="flex flex-col">
      <label
        htmlFor="year_founded"
        className="mb-2 text-xl capitalize text-purple-500"
      >
        Year Created:
      </label>
      <span className="mb-1 text-sm text-gray-400">
        when this blinks was launched
      </span>
      <input
        type="number"
        id="year_created"
        name="year_created"
        value={formData.year_created}
        onChange={handleInputChange}
        className="rounded border-2 border-gray-300 bg-black p-2"
        disabled={loading}
        placeholder="YYYY"
        min="2024"
        max={new Date().getFullYear()}
      />
    </div>

    {/* Blinks status drop down input */}
    <div className="flex flex-col">
      <label
        htmlFor="status"
        className="mb-2 text-xl capitalize text-purple-500"
      >
        Status:
      </label>
      <span className="mb-1 text-sm text-gray-400">
        current status of the blinks
      </span>
      <select
        id="status"
        name="status"
        value={formData.status || ""}
        onChange={handleInputChange}
        className="rounded border-2 border-gray-300 bg-black p-2"
      >
        <option value="">Select Status</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>

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
    
    {/* Demo video url input */}
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

    {/* Short description input */}
    <div className="flex flex-col col-span-full">
      <label htmlFor="short_description" className="mb-2 capitalize text-purple-500 text-xl">Short Description:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">minimum of 150 characters</span>
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

     {/* Key features input */}
     <div className="flex flex-col col-span-full">
      <label htmlFor="key_features" className="mb-2 capitalize text-purple-500 text-xl">Key Features:</label>
      <br/>
      <span className="text-sm text-gray-400 mb-1">minimum of 150 characters - create it in list format</span>
      <textarea
        id="key_features"
        name="key_features"
        value={formData.key_features}
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
