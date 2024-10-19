// /components/Dashboard/Guides/Create/GuidesUploadInfo.tsx
import React from 'react';
import Image from 'next/image';

interface GuidesUploadInfoProps {
  previewUrl: string | null;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeSelectedImage: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const GuidesUploadInfo: React.FC<GuidesUploadInfoProps> = ({
  previewUrl,
  handleFileSelect,
  removeSelectedImage,
  fileInputRef
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium text-gray-300">
        Guide Image
      </label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleFileSelect}
        ref={fileInputRef}
        className="mt-1 block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      {previewUrl && (
        <div className="mt-4">
          <Image src={previewUrl} alt="Selected" width={200} height={200} className="rounded-lg" />
          <button
            type="button"
            onClick={removeSelectedImage}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

export default GuidesUploadInfo;