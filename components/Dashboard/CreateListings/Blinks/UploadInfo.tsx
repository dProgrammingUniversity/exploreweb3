// /components/Dashboard/CreateListings/Blinks/UploadInfo.tsx
import React from 'react';

interface UploadInfoProps {
  image: string | null;
  handleFileSelect: (eventOrFile: File | React.ChangeEvent<HTMLInputElement>) => void;
  removeSelectedImage: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  loading: boolean;
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  dragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  fileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onFileInputClick: () => void;
}

const UploadInfo: React.FC<UploadInfoProps> = ({
  image,
  handleFileSelect,
  removeSelectedImage,
  fileInputRef,
  loading,
  dragOver,
  dragEnter,
  dragLeave,
  fileDrop,
  onFileInputClick,
}) => (
  <div className="col-span-full">
    <label htmlFor="logo" className="mb-2 capitalize text-purple-500 text-xl">Logo:</label>
    <div
      className="flex flex-col items-center justify-center w-full h-32 bg-gray-800 text-white rounded-lg border-2 border-dashed cursor-pointer hover:bg-gray-700"
      onClick={onFileInputClick}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <p>Drag and drop listing image here, or click to select files</p>
        <em>Only *.jpeg and *.png images will be accepted.</em>
        <em>MUST be 800x800px (HeightxWidth) Precisely and less than 750KB.</em>
      </div>
      <input
        ref={fileInputRef}
        id="logo"
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        disabled={loading}
        accept="image/jpeg, image/png"
      />
    </div>

    {image && (
      <>
        <img src={image} alt="Uploaded logo" className="mt-4" />
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

export default UploadInfo;
