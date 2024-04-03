// ExploreSol/components/CreateListings.tsx
"use client";
import { useState, useRef } from 'react';
import { createClient } from '@/utils/supabase/client';
import axios from 'axios'; // Import axios for making HTTP requests

export default function CreateListings() {
  const initialFormData = {
    name: '',
    // logo_url: '', // Skip this field as it will be uploaded separately
    category: '',
    status: '',
    keyword: '',
    year_founded: '',
    short_description: '',
    full_description: '',
    website: '',
    twitter: '',
    discord: '',
    telegram: '',
    pros: '',
    cons: '',
    team: '',
    governance: '',
    blockchain: '',
    use_case: '',
    pricing: '',
    roadmap_url: '',
    whitepaper_url: '',
    nft_collection: '',
    nft_collection_url: '',
    tokenomic: '',
    token_name: '',
    demo_url: '',
    moderation_status: 'pending', // Assuming 'pending' is your default value
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null); // New state for the image
  const fileInputRef = useRef(null); // Added ref for the file input
  const supabase = createClient();


  // Handle input changes 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload to Cloudinary
  // Updated to handle both event and direct file argument
  const handleImageUpload = async (fileOrEvent) => {
    let file = fileOrEvent;
    if (fileOrEvent.target) { // Check if it's an event
      file = fileOrEvent.target.files[0];
    }
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET!); // Your Cloudinary upload preset

      try {
        setLoading(true);
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        setImage(response.data.secure_url); // Set image URL in state
        setLoading(false);
      } catch (error) {
        console.error('Error uploading image:', error.response?.data || error); // Log the detailed error response from Cloudinary
        setLoading(false);
        setMessage('Error uploading image: ' + (error.response?.data.message || error.message)); // Include the Cloudinary error message
      }
    }
  

 // File upload drag and drop
 // Functions for drag and drop
 const dragOver = (e) => e.preventDefault();
 const dragEnter = (e) => e.preventDefault();
 const dragLeave = (e) => e.preventDefault();
 const fileDrop = (e) => {
   e.preventDefault();
   const files = e.dataTransfer.files;
   if (files.length) {
     handleImageUpload(files[0]); // Now passing the File object
   }
 };

 // Function to programmatically click the file input
 const onFileInputClick = () => fileInputRef.current.click();


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('Submitting...');

    // Include the image URL in the form submission
    const submissionData = { ...formData, logo_url: image };
    const { error } = await supabase.from('listings').insert([submissionData]);

    setLoading(false);
    if (error) {
      console.error(error);
      setMessage(`Failed to add listing: ${error.message}`);
    } else {
      setFormData(initialFormData);
      setImage(null); // Reset image state
      setMessage('Listing added successfully!');
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center px-4 py-6">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-gray-700 p-5 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(initialFormData).map((key) => {
          if (key === 'moderation_status' || key === 'logo_url') return null; // Skip these fields
          return (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="mb-2 capitalize text-white">{key.replace(/_/g, ' ')}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="border-2 border-gray-300 p-2 rounded bg-black"
                disabled={loading}
                placeholder={`Enter ${key}`}
              />
            </div>
          );
        })}
        {/* Image upload */}
        <div className="col-span-full">
          <label htmlFor="logo" className="mb-2 capitalize text-white">Logo</label>
          <div className="flex flex-col items-center justify-center w-full h-32 bg-gray-800 text-white rounded-lg border-2 border-dashed cursor-pointer hover:bg-gray-700" 
            onClick={onFileInputClick} // Opens file selection dialog
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p>Drag and drop listing image here, or click to select files</p>
              <em>(Only *.jpeg and *.png images will be accepted. Max 600x400px less than 100KB)</em>
            </div>
            <input 
              ref={fileInputRef} // Set the reference to the input
              id="logo" 
              type="file" 
              className="hidden"
              onChange={handleImageUpload}
              disabled={loading}
              accept="image/jpeg, image/png"
            />
          </div>
          {/* Preview the uploaded image */}
          {image && <img src={image} alt="Uploaded logo" className="mt-4" />}
        </div>
        <div className="col-span-full">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white rounded p-2 w-full" disabled={loading}>
            Add Listing
          </button>
        </div>
        {message && <div className="col-span-full"><p className="text-sm mt-2 text-white">{message}</p></div>}
      </form>
    </div>
  );
}
