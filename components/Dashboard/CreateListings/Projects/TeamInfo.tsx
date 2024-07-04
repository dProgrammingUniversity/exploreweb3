// /components/Dashboard/CreateListings/Projects/TeamInfo.tsx
import React from 'react';

const TeamInfo = ({ formData, handleInputChange, loading }) => (
  <div className="flex flex-col col-span-full">
    <h2 className="mb-4 text-purple-500 text-xl">Team Information</h2>

    {[...Array(5)].map((_, index) => (
      <div key={index} className="mb-4">
        <h3 className="mb-2 capitalize text-purple-500 text-xl">Team Member {index + 1}:</h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <div className="flex-1">
            <label className="mb-1 block">Name:</label>
            <input
              type="text"
              name={`team_${index + 1}_name`}
              value={formData[`team_${index + 1}_name`] || ""}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
              disabled={loading}
              placeholder={`Enter team member ${index + 1} name`}
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block">Twitter URL:</label>
            <input
              type="text"
              name={`team_${index + 1}_x_url`}
              value={formData[`team_${index + 1}_x_url`] || ""}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
              disabled={loading}
              placeholder={`Enter team member ${index + 1} Twitter URL`}
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block">LinkedIn URL:</label>
            <input
              type="text"
              name={`team_${index + 1}_linkedin_url`}
              value={formData[`team_${index + 1}_linkedin_url`] || ""}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
              disabled={loading}
              placeholder={`Enter team member ${index + 1} LinkedIn URL`}
            />
          </div>
        </div>
      </div>
    ))}

    <div className="mb-4">
      <h3 className="mb-2 text-purple-500 text-lg">Learn More About the Team:</h3>
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <div className="flex-1">
          <label className="mb-1 block">Twitter URL:</label>
          <input
            type="text"
            name="team_all_x_url"
            value={formData.team_all_x_url || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
            disabled={loading}
            placeholder="Enter official Twitter URL for team"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block">LinkedIn URL:</label>
          <input
            type="text"
            name="team_all_linkedin_url"
            value={formData.team_all_linkedin_url || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
            disabled={loading}
            placeholder="Enter official LinkedIn URL for team"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block">Website URL:</label>
          <input
            type="text"
            name="team_all_website_url"
            value={formData.team_all_website_url || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black mb-2 w-full"
            disabled={loading}
            placeholder="Enter official website URL for team"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TeamInfo;

