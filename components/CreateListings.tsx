// ExploreSol/components/CreateListings.tsx
"use client";
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { createClient } from '@/utils/supabase/client';
import axios from 'axios'; // Import axios for making HTTP requests

export default function CreateListings() {
  const initialFormData = {
    name: '',
    logo_url: '', 
    category_1: '',
    category_2: '',
    category_3: '',
    category_4: '',
    category_5: '',
    status: '', 
    keyword: '',
    year_founded: 2050, 
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
  
  const [formData, setFormData] = useState<CreateListingTypes>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null); // New state for the image
  const fileInputRef = useRef<HTMLInputElement>(null); // Added ref for the file input and // Assuming fileInputRef is for an input element, specify HTMLInputElement as its type
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold the selected file
  const [selectedCategory1, setSelectedCategory1] = useState<string | null>(null);
  const [selectedCategory2, setSelectedCategory2] = useState<string | null>(null);
  const [selectedCategory3, setSelectedCategory3] = useState<string | null>(null);
  const [selectedCategory4, setSelectedCategory4] = useState<string | null>(null);
  const [selectedCategory5, setSelectedCategory5] = useState<string | null>(null);
  const [statuses, setStatuses] = useState([]); // Add state to store statuses fetched from the database
  const [pricingOptions, setPricingOptions] = useState([]); // New state for pricing options
  const [blockchainOptions, setBlockchainOptions] = useState([]); // New state for blockchain options
  const [tokenomicOptions, setTokenomicOptions] = useState([]); // New state for tokenomic options
  const [nftcollectionOptions, setNftCollectionOptions] = useState([]); // New state for NFT Collection options
  const [governanceOptions, setGovernanceOptions] = useState([]); // New state for Governance options



  // Initialize supabaseClient client
  const supabaseClient = createClient();




  // Add state to hold categories fetched from the database
const [categories, setCategories] = useState<CategoryListingTypes[]>([]);


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

  // Fetch NFT Collection options from the database
  async function fetchNftCollectionOptions() {
    const { data, error } = await supabaseClient
    .rpc('enum_nft_collection_values');

    if (error) {
      console.error("Error fetching NFT Collection options:", error);
    } else {
      setNftCollectionOptions(data);
    }
  }

  // Fetch Governance options from the database
  async function fetchGovernanceOptions() {
    const { data, error } = await supabaseClient
    .rpc('enum_governance_values');

    if (error) {
      console.error("Error fetching Governance options:", error);
    } else {
      setGovernanceOptions(data);
    }
  }

  
  fetchCategories();
  fetchStatuses();
  fetchPricingOptions();
  fetchBlockchainOptions();
  fetchTokenomicOptions();
  fetchNftCollectionOptions();
  fetchGovernanceOptions();
}, []);



  // Handle input changes 
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
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
  const handleFileSelect = (eventOrFile: File | ChangeEvent<HTMLInputElement>) => {
    let file: File | null = null;
    if (eventOrFile instanceof File) {
      // Direct File object from drag-and-drop
      file = eventOrFile;
    } else if (eventOrFile.target && eventOrFile.target.files) {
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
 const dragOver = (e: { preventDefault: () => any; }) => e.preventDefault();
 const dragEnter = (e: { preventDefault: () => any; }) => e.preventDefault();
 const dragLeave = (e: { preventDefault: () => any; }) => e.preventDefault();
 const fileDrop = (e: { preventDefault: () => void; dataTransfer: { files: any; }; }) => {
   e.preventDefault();
   const files = e.dataTransfer.files;
   if (files.length) {
     handleFileSelect(files[0]); // Now passing the File object
   }
 };


// Function to programmatically click the file input with null check
const onFileInputClick = () => {
  if (fileInputRef.current) {
    fileInputRef.current.click();
  }
};


  // Handle form submission
  // Updated handleSubmit to handle image upload on form submit
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
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
      // setMessage(`Failed to add listing: ${error.message}`);
      // Asserting error as any to access its properties
      const message = (error as any).message ?? 'An unknown error occurred';
      setMessage(`Failed to add listing: ${message}`);
    } finally {
      setLoading(false);
    }
    
  };

  return (

    <div className="flex-1 w-full flex flex-col items-center px-4 py-6">

      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-gray-700 p-5 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Input for name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 capitalize text-white text-xl">Name:</label>
          <span className="text-sm text-gray-400 mb-1">max of 50 characters</span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter name"
          />
        </div>

        {/* Input for keyword */}
        <div className="flex flex-col">
          <label htmlFor="keyword" className="mb-2 capitalize text-white text-xl">Keyword:</label>
          <span className="text-sm text-gray-400 mb-1">format sol, wallet, swap</span>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={formData.keyword}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter keyword"
          />
        </div>

        {/* Input for website */}
        <div className="flex flex-col">
          <label htmlFor="website" className="mb-2 capitalize text-white text-xl">Website:</label>
          <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz</span>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter website"
          />
        </div>

        {/* Input for twitter */}
        <div className="flex flex-col">
          <label htmlFor="twitter" className="mb-2 capitalize text-white text-xl">Twitter:</label>
          <span className="text-sm text-gray-400 mb-1">format https://x.com/ExploreSolXyz</span>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter twitter"
          />
        </div>

        {/* Input for discord */}
        <div className="flex flex-col">
          <label htmlFor="discord" className="mb-2 capitalize text-white text-xl">Discord:</label>
          <span className="text-sm text-gray-400 mb-1">format https://discord.gg/YwySjzW</span>
          <input
            type="discord"
            id="discord"
            name="discord"
            value={formData.discord}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter discord"
          />
        </div>

        {/* Input for telegram */}
        <div className="flex flex-col">
          <label htmlFor="telegram" className="mb-2 capitalize text-white text-xl">Telegram:</label>
          <span className="text-sm text-gray-400 mb-1">format https://t.me/solana</span>
          <input
            type="telegram"
            id="telegram"
            name="telegram"
            value={formData.telegram}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter telegram"
          />
        </div>

        {/* Input for solarplex */}
        <div className="flex flex-col">
          <label htmlFor="solarplex" className="mb-2 capitalize text-white text-xl">Solarplex:</label>
          <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz</span>
          <input
            type="solarplex"
            id="solarplex"
            name="solarplex"
            value={formData.solarplex}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter solarplex"
          />
        </div>

        {/* Input for roadmap_url */}
        <div className="flex flex-col">
          <label htmlFor="roadmap_url" className="mb-2 capitalize text-white text-xl">Roadmap URL:</label>
          <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/roadmap</span>
          <input
            type="roadmap_url"
            id="roadmap_url"
            name="roadmap_url"
            value={formData.roadmap_url}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter roadmap_url"
          />
        </div>

        {/* Input for whitepaper_url */}
        <div className="flex flex-col">
          <label htmlFor="whitepaper_url" className="mb-2 capitalize text-white text-xl">Whitepaper URL:</label>
          <span className="text-sm text-gray-400 mb-1">format https://exploresol.xyz/whitepaper</span>
          <input
            type="whitepaper_url"
            id="whitepaper_url"
            name="whitepaper_url"
            value={formData.whitepaper_url}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter whitepaper_url"
          />
        </div>

        {/* Input for demo_url */}
        <div className="flex flex-col">
          <label htmlFor="demo_url" className="mb-2 capitalize text-white text-xl">Demo URL:</label>
          <span className="text-sm text-gray-400 mb-1">format https://youtube.com/video</span>
          <input
            type="demo_url"
            id="demo_url"
            name="demo_url"
            value={formData.demo_url}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter demo_url"
          />
        </div>

        {/* Input for year_founded */}
        <div key="year_founded" className="flex flex-col">
          <label htmlFor="year_founded" className="mb-2 capitalize text-white text-xl">Year Founded:</label>
          <span className="text-sm text-gray-400 mb-1">when project launched</span>
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
          <label htmlFor="pricing" className="mb-2 capitalize text-white text-xl">Pricing:</label>
          <span className="text-sm text-gray-400 mb-1">Freemium = Free+Premium options</span>
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
          <label htmlFor="blockchain" className="mb-2 capitalize text-white text-xl">Blockchain:</label>
          <span className="text-sm text-gray-400 mb-1">strictly Solana or multichain</span>
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
          <label htmlFor="tokenomic" className="mb-2 capitalize text-white text-xl">Tokenomic:</label>
          <span className="text-sm text-gray-400 mb-1">does the project have token</span>
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

        {/* Input for token_name */}
        <div className="flex flex-col">
          <label htmlFor="token_name" className="mb-2 capitalize text-white text-xl">Token Name:</label>
          <span className="text-sm text-gray-400 mb-1">ticker only like - Sol</span>
          <input
            type="token_name"
            id="token_name"
            name="token_name"
            value={formData.token_name}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter token_name"
          />
        </div>

        {/* Dropdown for NFT Collection */}
        <div className="flex flex-col">
          <label htmlFor="nft_collection" className="mb-2 capitalize text-white text-xl">NFT Collection:</label>
          <span className="text-sm text-gray-400 mb-1">does the project have NFT collection</span>
          <select
            id="nft_collection"
            name="nft_collection"
            value={formData.nft_collection || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select NFT Collection</option>
            {nftcollectionOptions.map((nft_collection) => (
              <option key={nft_collection} value={nft_collection}>
                {nft_collection}
              </option>
            ))}
          </select>
        </div>

        {/* Input for nft_collection_url */}
        <div className="flex flex-col">
          <label htmlFor="nft_collection_url" className="mb-2 capitalize text-white text-xl">NFT Collection URL:</label>
          <span className="text-sm text-gray-400 mb-1">format https://tensor.trade/trade/nftname</span>
          <input
            type="nft_collection_url"
            id="nft_collection_url"
            name="nft_collection_url"
            value={formData.nft_collection_url}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
            disabled={loading}
            placeholder="Enter nft_collection_url"
          />
        </div>

        {/* Dropdown for Governance */}
        <div className="flex flex-col">
          <label htmlFor="governance" className="mb-2 capitalize text-white text-xl">Governance:</label>
          <span className="text-sm text-gray-400 mb-1">is it governed by a DAO or not</span>
          <select
            id="governance"
            name="governance"
            value={formData.governance || ""}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded bg-black"
          >
            <option value="">Select Governance</option>
            {governanceOptions.map((governance) => (
              <option key={governance} value={governance}>
                {governance}
              </option>
            ))}
          </select>
        </div>

        {/* Status dropdown list */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-2 capitalize text-white text-xl">Status:</label>
          <span className="text-sm text-gray-400 mb-1">current status of the project</span>
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
          <label className="mb-2 capitalize text-white text-xl">Category 1:</label>
          <br/>
          <span className="text-sm text-gray-400 mb-1">main category must select 1 from the list and other categories 2-5 are optional</span>
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
          <label className="mb-2 capitalize text-white text-xl">Category 2 (optional):</label>
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
          <label className="mb-2 capitalize text-white text-xl">Category 3 (optional):</label>
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
          <label className="mb-2 capitalize text-white text-xl">Category 4 (Optional):</label>
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
          <label className="mb-2 capitalize text-white text-xl">Category 5 (optional):</label>
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
          <label htmlFor="short_description" className="mb-2 capitalize text-white text-xl">Short Description:</label>
          <br/>
          <span className="text-sm text-gray-400 mb-1">minimum of 50 characters</span>
            <textarea
              id="short_description"
              name="short_description"
              value={formData.short_description}
              onChange={handleInputChange}
              disabled={loading}
              rows={5} // Initial number of rows
              maxLength={1000} // Adjust the max length as per your requirement for 300 words
              style={{ minHeight: '50px', resize: 'vertical' }} // User can resize vertically
              className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
            />
        </div>

        {/* Textarea for full_description */}
        <div key="full_description" className="col-span-full">
          <label htmlFor="full_description" className="mb-2 capitalize text-white text-xl">Full Description:</label>
          <br/>
          <span className="text-sm text-gray-400 mb-1">minimum of 150 characters</span>
          <textarea
            id="full_description"
            name="full_description"
            value={formData.full_description}
            onChange={handleInputChange}
            disabled={loading}
            rows={20} // Initial number of rows
            maxLength={2000} // Adjust the max length as per your requirement for 300 words
            style={{ minHeight: '80px', resize: 'vertical' }} // User can resize vertically
            className="flex flex-col justify-center w-full bg-gray-800 text-white rounded-lg border-2"
          />
        </div>

        {/* Textarea for Pros, Cons and Use Case*/}
        {['pros', 'cons', 'use_case'].map((field) => (
          <div key={field} className="flex flex-col col-span-full">
            <label htmlFor={field} className="mb-2 capitalize text-white text-xl">{field.replace(/_/g, ' ')}</label>
          <span className="text-sm text-gray-400 mb-1">minimum of 50 characters and max of 300 characters</span>
            <textarea
              id={field}
              name={field}
              value={formData[field as keyof CreateListingTypes] || ""}       // Ensure TypeScript knows `field` is a key of `CreateListingTypes`
              onChange={handleInputChange}
              rows={3} // Initial rows
              maxLength={1000} // Adjust as needed
              className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
              placeholder={`Enter ${field.replace(/_/g, ' ')}`}
            />
          </div>
        ))}

        {/* Textarea for Team - similar to Short Description */}
        {['team'].map((field) => (
          <div key={field} className="flex flex-col col-span-full">
            <label htmlFor={field} className="mb-2 capitalize text-white text-xl">{field.replace(/_/g, ' ')}</label>
          <span className="text-sm text-gray-400 mb-1">solo founder or team name and social media</span>
            <textarea
              id={field}
              name={field}
              value={formData[field as keyof CreateListingTypes] || ""}       // Ensure TypeScript knows `field` is a key of `CreateListingTypes`
              onChange={handleInputChange}
              rows={3} // Initial rows
              maxLength={1000} // Adjust as needed
              className="border-2 border-gray-300 p-2 rounded bg-black resize-vertical"
              placeholder={`Enter ${field.replace(/_/g, ' ')}`}
            />
          </div>
        ))}

        {/* Image upload */}
        <div className="col-span-full">
          <label htmlFor="logo" className="mb-2 capitalize text-white text-xl">Logo:</label>
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
