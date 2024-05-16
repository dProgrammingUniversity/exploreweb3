import React from 'react';

const UploadSection = ({ image, handleFileSelect, removeSelectedImage, fileInputRef, loading, dragOver, dragEnter, dragLeave, fileDrop, onFileInputClick }) => (
  <div className="col-span-full">
    <label htmlFor="logo" className="mb-2 capitalize text-purple-500 text-xl">Logo:</label>
    <div className="flex flex-col items-center justify-center w-full h-32 bg-gray-800 text-white rounded-lg border-2 border-dashed cursor-pointer hover:bg-gray-700"
      onClick={onFileInputClick}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}>
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <p>Drag and drop listing image here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted. Max 600x400px less than 100KB)</em>
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
        <button type="button" onClick={removeSelectedImage} className="btn bg-red-500 hover:bg-red-700 text-white rounded p-2 w-full mt-2">
          Remove Image
        </button>
      </>
    )}
  </div>
);

export default UploadSection;
