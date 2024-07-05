// /components/Dashboard/CreateListings/Blinks/ProjectInfo.tsx
import React from "react";

const ProjectInfo = ({
  formData,
  handleInputChange,
  projectListOptions,
  showCreatorFields,
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
      <span className="mb-2 text-gray-400">
        Select the project this blink is associated with.
        <br />
        <br />
        <b>IMPORTANT NOTES:</b>
        <br />
        <b>(1).</b> To maintain quality listings, Blinks need to be associated with an
        existing Solana project or it will likely not be approved.
        <br />
        <b>(2).</b> If your associated project not listed yet on Explore Solana.
        Kindly, submit it
        <a href="/dashboard/create-listings/projects">
          {" "}
          <b>Here</b> and have it approved and listed first before submitting
          the Blinks associated with it.
        </a>
        .
        <br />
        <b>(3).</b> Need help/got questions? Kindly reach out to me via
        <a href="/support">
          {" "}
          <b>Support</b>.
        </a>
        .
        <br />
        <br />
        <b>Update:</b> You can now submit Blinks even if not directly associated with a
        listed project on Explore Solana. To do that, select
        "0-Non-Listed-Project" option below which will allow you to fill additional details to increase chance of your Blinks getting approved without a linked project.
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

    {showCreatorFields && (
      <>
        {/* Creator Name Input */}
        <div className="flex flex-col">
          <label
            htmlFor="creator_name"
            className="mb-2 text-xl capitalize text-purple-500"
          >
            Creator Name:
          </label>
          <span className="mb-1 text-sm text-gray-400">
            creator/dev and if its under a project not listed above kindly use
            the project name instead.
          </span>
          <input
            type="text"
            id="creator_name"
            name="creator_name"
            value={formData.creator_name}
            onChange={handleInputChange}
            className="w-full rounded border-2 border-gray-300 bg-black p-2 text-white"
            placeholder="Enter creator or unlisted project name"
          />
        </div>
        {/* Creator URL Input */}
        <div className="flex flex-col">
          <label
            htmlFor="creator_x_url"
            className="mb-2 text-xl capitalize text-purple-500"
          >
            Creator X URL:
          </label>
          <span className="mb-1 text-sm text-gray-400">
            creator/dev or project X (Twitter) handle. Preferably point to the
            tweet used to announce this Blinks.
          </span>
          <input
            type="url"
            id="creator_x_url"
            name="creator_x_url"
            value={formData.creator_x_url}
            onChange={handleInputChange}
            className="w-full rounded border-2 border-gray-300 bg-black p-2 text-white"
            placeholder="Enter creator x (Twitter) URL"
          />
        </div>
      </>
    )}
  </>
);

export default ProjectInfo;
