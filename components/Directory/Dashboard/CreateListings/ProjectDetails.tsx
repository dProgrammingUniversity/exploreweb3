import React from 'react';

const ProjectDetails = ({ formData, handleInputChange, categories, statuses, selectedCategory1, setSelectedCategory1, selectedCategory2, setSelectedCategory2, selectedCategory3, setSelectedCategory3, selectedCategory4, setSelectedCategory4, selectedCategory5, setSelectedCategory5, loading }) => (
  <>
    <div key="short_description" className="col-span-full">
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

    <div key="full_description" className="col-span-full">
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
          value={formData[field as keyof CreateListingTypes] || ""}
          onChange={handleInputChange}
          rows={3}
          maxLength={1000}
          className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
          placeholder={`Enter ${field.replace(/_/g, ' ')}`}
        />
      </div>
    ))}

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

export default ProjectDetails;
