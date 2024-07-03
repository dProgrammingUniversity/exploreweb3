// /components/Directory/Dashboard/CreateListings/Blinks/ProjectInfo.tsx
import React from "react";

const ProjectInfo = ({ formData, handleInputChange, projectListOptions }) => (
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
        (1). To maintain quality listings, Blinks need to be associated with an
        existing Solana project or it will not be approved.
        <br />
        (2). If your associated project not listed yet on Explore Solana. Kindly,
        submit it
        <a href="/dashboard/create-listings/projects">
          {" "}
          <b>Here</b> and have it approved and listed first before submitting the Blinks
          associated with it.
        </a>. 
        <br />
        (3). Need help/got questions? Kindly reach out to me via 
        <a href="/support">
          {" "}
          <b>Support</b>.
        </a>. 
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

export default ProjectInfo;
