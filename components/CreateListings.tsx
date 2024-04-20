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
    // status: '', // Skip this field as it will be added separately
    keyword: '',
    // year_founded: '', // Skip this field as it will be validated separately
    // short_description: '', // Skip this field as it will be added separately
    // full_description: '', // Skip this field as it will be added separately
    website: '',
    twitter: '',
    discord: '',
    telegram: '',
    solarplex: '',
    // pros: '', // Skip this field as it will be added separately
    // cons: '', // Skip this field as it will be added separately
    // team: '', // Skip this field as it will be added separately
    governance: '',
    // blockchain: '', // Skip this field as it will be added separately
    // use_case: '', // Skip this field as it will be added separately
    // pricing: '', // Skip this field as it will be added separately
    roadmap_url: '',
    whitepaper_url: '',
    nft_collection: '',
    nft_collection_url: '',
    // tokenomic: '', // Skip this field as it will be added separately
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
  const [statuses, setStatuses] = useState([]); // Add state to store statuses fetched from the database
  const [pricingOptions, setPricingOptions] = useState([]); // New state for pricing options
  const [blockchainOptions, setBlockchainOptions] = useState([]); // New state for blockchain options
  const [tokenomicOptions, setTokenomicOptions] = useState([]); // New state for tokenomic options



  // Initialize supabaseClient client
  const supabaseClient = createClient();




  // Add state to hold categories fetched from the database
const [categories, setCategories] = useState([]);


// Fetch categories from the database
useEffect(() => {
  // Fetch categories from the database
  async function fetchCategories() {
    const { data, error } = await supabaseClient
      .from('categories')
      .select('id, name');
    
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
  }

  // Fetch statuses from the database
  async function fetchStatuses() {
    const { data, error } = await supabaseClient
      .rpc('enum_status_values');

    if (error) {
      console.error("Error fetching statuses:", error);
    } else {
      setStatuses(data);
    }
  }

  // Fetch pricing options from the database
  async function fetchPricingOptions() {
    const { data, error } = await supabaseClient
    .rpc('enum_pricing_values');

    if (error) {
      console.error("Error fetching pricing options:", error);
    } else {
      setPricingOptions(data);
    }
  }

  // Fetch blockchain options from the database
  async function fetchBlockchainOptions() {
    const { data, error } = await supabaseClient
    .rpc('enum_blockchain_values');

    if (error) {
      console.error("Error fetching blockchain options:", error);
    } else {
      setBlockchainOptions(data);
    }
  }

  // Fetch tokenomic options from the database
  async function fetchTokenomicOptions() {
    const { data, error } = await supabaseClient
    .rpc('enum_tokenomic_values');

    if (error) {
      console.error("Error fetching tokenomic options:", error);
    } else {
      setTokenomicOptions(data);
    }
  }

  
  fetchCategories();
  fetchStatuses();
  fetchPricingOptions();
  fetchBlockchainOptions();
  fetchTokenomicOptions();
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

    // If it's the year_founded input, ensure it's a valid year before setting it
    if(name === 'year_founded'){
      // Assuming you want to allow years from 1900 to the current year
      const currentYear = new Date().getFullYear();
      if(value.length === 4 && (value < 1900 || value > currentYear)){
        return; // Invalid year, do not set it
      }
    }

    // Update the form data with the new value
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
      const { data, error } = await supabaseClient
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
        
        {/* All input fields for the form */}
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

        {/* Input for year_founded */}
        <div key="year_founded" className="flex flex-col">
          <label htmlFor="year_founded" className="mb-2 capitalize text-white">Year Founded</label>
          <input
            type="number"
            id="year_founded"
            name="year_founded"
            value={formData.year_founded}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="YYYY"
            min="1900" // Adjust the min year as per your requirements
            max={new Date().getFullYear()} // This will make the current year as the max year
          />
        </div>

        {/* Dropdown for Pricing */}
        <div className="flex flex-col">
          <label htmlFor="pricing" className="mb-2 capitalize text-white">Pricing</label>
          <select
            id="pricing"
            name="pricing"
            value={formData.pricing || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select Pricing</option>
            {pricingOptions.map((pricing) => (
              <option key={pricing} value={pricing}>
                {pricing}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for Blockchain */}
        <div className="flex flex-col">
          <label htmlFor="blockchain" className="mb-2 capitalize text-white">Blockchain</label>
          <select
            id="blockchain"
            name="blockchain"
            value={formData.blockchain || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select Blockchain</option>
            {blockchainOptions.map((blockchain) => (
              <option key={blockchain} value={blockchain}>
                {blockchain}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for Tokenomic */}
        <div className="flex flex-col">
          <label htmlFor="tokenomic" className="mb-2 capitalize text-white">Tokenomic</label>
          <select
            id="tokenomic"
            name="tokenomic"
            value={formData.tokenomic || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select Tokenomic</option>
            {tokenomicOptions.map((tokenomic) => (
              <option key={tokenomic} value={tokenomic}>
                {tokenomic}
              </option>
            ))}
          </select>
        </div>

        {/* Status dropdown list */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-2 capitalize text-white">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select Status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

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

        {/* Textarea for short_description */}
        <div key="short_description" className="col-span-full">
          <label htmlFor="short_description" className="mb-2 capitalize text-white">Short Description</label>
            
            <textarea
              id="short_description"
              name="short_description"
              value={formData.short_description}
              onChange={handleInputChange}
              disabled={loading}
              rows="5" // Initial number of rows
              maxLength="1000" // Adjust the max length as per your requirement for 300 words
              style={{ minHeight: '50px', resize: 'vertical' }} // User can resize vertically
              className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
            />
        </div>

        {/* Textarea for full_description */}
        <div key="full_description" className="col-span-full">
          <label htmlFor="full_description" className="mb-2 capitalize text-white">Full Description</label>
          <textarea
            id="full_description"
            name="full_description"
            value={formData.full_description}
            onChange={handleInputChange}
            disabled={loading}
            rows="20" // Initial number of rows
            maxLength="2000" // Adjust the max length as per your requirement for 300 words
            style={{ minHeight: '80px', resize: 'vertical' }} // User can resize vertically
            className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
          />
        </div>

        {/* Pros, Cons, Use Case, and Team - similar to Short Description */}
        {['pros', 'cons', 'use_case', 'team'].map((field) => (
          <div key={field} className="flex flex-col col-span-full">
            <label htmlFor={field} className="mb-2 capitalize text-white">{field.replace(/_/g, ' ')}</label>
            <textarea
              id={field}
              name={field}
              value={formData[field] || ""}
              onChange={handleInputChange}
              rows="3" // Initial rows
              maxLength="1000" // Adjust as needed
              className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
              placeholder={`Enter ${field.replace(/_/g, ' ')}`}
            />
          </div>
        ))}

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
