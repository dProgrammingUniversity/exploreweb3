// /components/Dashboard/CreateListings/Projects/BasicInfo.tsx
import React from 'react';

const BasicInfo = ({ formData, handleInputChange, statuses, loading }) => (
  <>
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 capitalize text-purple-500 text-xl">Name:</label>
      <span className="text-sm text-gray-400 mb-1">max of 50 characters</span>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter name"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="keyword" className="mb-2 capitalize text-purple-500 text-xl">Keyword:</label>
      <span className="text-sm text-gray-400 mb-1">format sol, wallet, swap</span>
      <input
        type="text"
        id="keyword"
        name="keyword"
        value={formData.keyword}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter keyword"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="website" className="mb-2 capitalize text-purple-500 text-xl">Website:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploreweb3.xyz</span>
      <input
        type="text"
        id="website"
        name="website"
        value={formData.website}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter website"
      />
    </div>

    <div key="year_founded" className="flex flex-col">
      <label htmlFor="year_founded" className="mb-2 capitalize text-purple-500 text-xl">Year Founded:</label>
      <span className="text-sm text-gray-400 mb-1">when project launched</span>
      <input
        type="number"
        id="year_founded"
        name="year_founded"
        value={formData.year_founded}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="YYYY"
        min="1900"
        max={new Date().getFullYear()}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="status" className="mb-2 capitalize text-purple-500 text-xl">Status:</label>
      <span className="text-sm text-gray-400 mb-1">current status of the project</span>
      <select
        id="status"
        name="status"
        value={formData.status || ""}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
      >
        <option value="">Select Status</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  </>
);

export default BasicInfo;

