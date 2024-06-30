// /components/Directory/Dashboard/CreateListings/Blinks/BasicInfo.tsx
import React from "react";

const BasicInfo = ({
  formData,
  handleInputChange,
  projectListOptions,
}) => (
  <>
    {/* Project List Options dropdown input */}
    <div className="col-span-full">
      <label
        htmlFor="project"
        className="mb-2 text-xl capitalize text-purple-500"
      >
        Project:
      </label>
      <br />
      <span className="mb-2  text-gray-400">
        Select the project this blink is associated with.
        <br />
        To maintain quality listings, Blinks need to be associated with an existing Solana project or it will not be approved. 
        <br /> 
        If your associated project not listed yet. Kindly, submit it 
        <a href='/dashboard/create-listings/projects'>
        {" "}  <b>Here</b> and have is listed first before submitting the Blinks associated with it.
        </a>
      </span>
      <select
        id="project"
        name="project"
        value={formData.project}
        onChange={handleInputChange}
        className="w-full rounded border-2 border-gray-300 bg-black p-2 text-white"
      >
        <option value="">Select a Project</option>
        {projectListOptions.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>

  </>
);

export default BasicInfo;
