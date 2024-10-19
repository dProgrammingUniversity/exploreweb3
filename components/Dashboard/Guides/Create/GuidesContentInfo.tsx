// /components/Dashboard/Guides/Create/GuidesContentInfo.tsx
import { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const GuidesContentInfo = ({ projects, formData, setFormData }) => {
  const { title, shortTitle, projectId, content, summaryContent } = formData;

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="shortTitle" className="block text-sm font-medium text-gray-300">Short Title (max 50 characters)</label>
        <input
          type="text"
          id="shortTitle"
          value={shortTitle}
          onChange={(e) => setFormData({ ...formData, shortTitle: e.target.value.slice(0, 50) })}
          maxLength={50}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="project" className="block text-sm font-medium text-gray-300">Project</label>
        <select
          id="project"
          value={projectId}
          onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-black text-white"
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="summaryContent" className="block text-sm font-medium text-gray-300">Summary Content (max 500 characters)</label>
        <ReactQuill
          value={summaryContent}
          onChange={(value) => {
            if (value.length <= 500) {
              setFormData({ ...formData, summaryContent: value });
            }
          }}
          modules={modules}
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">Content</label>
        <ReactQuill
          value={content}
          onChange={(value) => setFormData({ ...formData, content: value })}
          modules={modules}
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default GuidesContentInfo;