// /components/Directory/Dashboard/CreateListings/Blinks/BasicInfo.tsx
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
      <label htmlFor="website" className="mb-2 capitalize text-purple-500 text-xl">Blinks URL:</label>
      <span className="text-sm text-gray-400 mb-1">format https://exploresolana.com</span>
      <input
        type="text"
        id="website"
        name="website"
        value={formData.blinks_url}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="Enter blinks url"
      />
    </div>

    <div key="year_founded" className="flex flex-col">
      <label htmlFor="year_founded" className="mb-2 capitalize text-purple-500 text-xl">Year Created:</label>
      <span className="text-sm text-gray-400 mb-1">when this blinks was launched</span>
      <input
        type="number"
        id="year_created"
        name="year_created"
        value={formData.year_created}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded bg-black"
        disabled={loading}
        placeholder="YYYY"
        min="2024"
        max={new Date().getFullYear()}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="status" className="mb-2 capitalize text-purple-500 text-xl">Status:</label>
      <span className="text-sm text-gray-400 mb-1">current status of the blinks</span>
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

