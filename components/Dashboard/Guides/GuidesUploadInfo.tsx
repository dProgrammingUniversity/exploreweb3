// /components/Dashboard/Guides/GuidesUploadInfo.tsx
import React from "react";

const GuidesUploadInfo = ({ imageUrl, handleFileSelect, removeSelectedImage }) => {
  return (
    <div className="mt-6">
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">Guide Image</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleFileSelect}
        className="mt-1 block w-full"
      />
      {imageUrl && (
        <>
          <img src={imageUrl} alt="Guide preview" className="mt-4 max-w-xs" />
          <button
            type="button"
            onClick={removeSelectedImage}
            className="btn bg-red-500 hover:bg-red-700 text-white rounded p-2 w-full mt-2"
          >
            Remove Image
          </button>
        </>
      )}
    </div>
  );
};

export default GuidesUploadInfo;