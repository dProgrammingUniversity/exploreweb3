// ExploreSol/components/CreateListings.tsx
"use client";
import { useState, useRef, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import axios from 'axios'; // Import axios for making HTTP requests

export default function CreateListings() {
  const initialFormData = {
    name: '',
    // logo_url: '', // Skip this field as it will be uploaded separately
    // category_1: '', // Skip category fields as it will be added separately
    // category_2: '',
    // category_3: '',
    // category_4: '',
    // category_5: '',
    status: '',
    keyword: '',
    year_founded: '',
    short_description: '',
    full_description: '',
    website: '',
    twitter: '',
    discord: '',
    telegram: '',
    solarplex: '',
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
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
  const [selectedCategory1, setSelectedCategory1] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedCategory3, setSelectedCategory3] = useState(null);
  const [selectedCategory4, setSelectedCategory4] = useState(null);
  const [selectedCategory5, setSelectedCategory5] = useState(null);
  const supabase = createClient();




  // Add state to hold categories fetched from the database
const [categories, setCategories] = useState([]);

// Add state to hold selected category IDs from the multi-select
// const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

// Fetch categories from the database
useEffect(() => {
  async function fetchCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('id, name');
    
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
  }
  
  fetchCategories();
}, []);

// This handler will be called when the categories are selected or deselected
// Add separate handlers for each category dropdown
const handleCategoryChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};





  // Handle input changes 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload to Cloudinary
  // Updated to handle both event and direct file argument and setting file to state
  const handleFileSelect = (eventOrFile) => {
    let file;
    if (eventOrFile instanceof File) {
      // Direct File object from drag-and-drop
      file = eventOrFile;
    } else {
      // Event from click upload
      file = eventOrFile.target.files[0];
    }
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file)); // For local preview
    }
  };
  
  // Remove the selected image and reset the state
  const removeSelectedImage = () => {
    setSelectedFile(null);
    setImage(null);
  };
  

 // File upload drag and drop
 // Functions for drag and drop
 const dragOver = (e) => e.preventDefault();
 const dragEnter = (e) => e.preventDefault();
 const dragLeave = (e) => e.preventDefault();
 const fileDrop = (e) => {
   e.preventDefault();
   const files = e.dataTransfer.files;
   if (files.length) {
     handleFileSelect(files[0]); // Now passing the File object
   }
 };

 // Function to programmatically click the file input
 const onFileInputClick = () => fileInputRef.current.click();


  // Handle form submission
  // Updated handleSubmit to handle image upload on form submit
  const handleSubmit = async (event) => {
    console.log('Form submitted!');

    event.preventDefault();
    setLoading(true);
    setMessage('Submitting...');

    // Upload the selected image to Cloudinary
    let imageUrl = '';
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET!);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        imageUrl = response.data.secure_url; // Get image URL from Cloudinary
      } catch (error) {
        console.error('Error uploading image:', error);
        setLoading(false);
        setMessage('Failed to upload image.');
        return;
      }
    }

    // Now include the image URL in the form submission
    // Modify the submission data to include selected category IDs
    const submissionData = {
      ...formData,
      logo_url: imageUrl, // Include the image URL in the submission data
      category_1: selectedCategory1 ? parseInt(selectedCategory1) : null, // Convert to integer ID or null
      category_2: selectedCategory2 ? parseInt(selectedCategory2) : null,
      category_3: selectedCategory3 ? parseInt(selectedCategory3) : null,
      category_4: selectedCategory4 ? parseInt(selectedCategory4) : null,
      category_5: selectedCategory5 ? parseInt(selectedCategory5) : null,
    };

    try {
      // We'll use a transaction for this insert to ensure all or nothing behavior
      const { data, error } = await supabase
        .from('listings')
        .insert([submissionData]);

      if (error) {
        throw error;
      }

      setMessage('Listing added successfully!');
      setLoading(false);
      // Resetting form fields after successful submission
      setFormData(initialFormData);
      setImage(null); // Reset image state
      setSelectedCategory1(null); // Reset selected category 1
      setSelectedCategory2(null); // Reset selected category 2
      setSelectedCategory3(null); // Reset selected category 3
      setSelectedCategory4(null); // Reset selected category 4
      setSelectedCategory5(null); // Reset selected category 5
    } catch (error) {
      console.error('Failed to add listing:', error);
      setMessage(`Failed to add listing: ${error.message}`);
    } finally {
      setLoading(false);
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

        {/* Category_1 dropdown list  */}
        <div className="col-span-full">
          <label className="mb-2 capitalize text-white">Category 1</label>
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

        {/* Category_2 dropdown list  */}
        <div className="col-span-full">
          <label className="mb-2 capitalize text-white">Category 2</label>
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

        {/* Category_3 dropdown list  */}
        <div className="col-span-full">
          <label className="mb-2 capitalize text-white">Category 3</label>
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

        {/* Category_4 dropdown list  */}
        <div className="col-span-full">
          <label className="mb-2 capitalize text-white">Category 4</label>
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

        {/* Category_5 dropdown list  */}
        <div className="col-span-full">
          <label className="mb-2 capitalize text-white">Category 5</label>
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
              onChange={handleFileSelect}
              disabled={loading}
              accept="image/jpeg, image/png"
            />
          </div>

          {/* Preview the uploaded image with a button to remove the selected image before submitting */}
          {image && (
            <>
              <img src={image} alt="Uploaded logo" className="mt-4" />
              <button type="button" onClick={removeSelectedImage} className="btn bg-red-500 hover:bg-red-700 text-white rounded p-2 w-full mt-2">
                Remove Image
              </button>
            </>
          )}
        </div>

        {/* Submit button */}
        <div className="col-span-full">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white rounded p-2 w-full" disabled={loading}>
            Add Listing
          </button>
        </div>

        {/* Form feedback messages */}
        {message && <div className="col-span-full"><p className="text-sm mt-2 text-white">{message}</p></div>}
      
      </form>
    </div>
  );
}
