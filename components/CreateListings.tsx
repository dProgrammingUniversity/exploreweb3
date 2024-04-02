"use client";
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function CreateListings() {
  const initialFormData = {
    name: '',
    logo_url: '',
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
  const supabase = createClient();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('Submitting...');

    const { error } = await supabase.from('listings').insert([formData]);

    setLoading(false);
    if (error) {
      console.error(error);
      setMessage(`Failed to add listing: ${error.message}`);
    } else {
      setFormData(initialFormData); // Reset form
      setMessage('Listing added successfully!');
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center px-4 py-6">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-gray-700 p-5 rounded shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(initialFormData).map((key) => {
          if (key === 'moderation_status') return null; // Skip 'moderation_status' field
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
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white rounded p-2 w-full" disabled={loading}>
            Add Listing
          </button>
        </div>
        {message && <div className="col-span-1 md:col-span-2 lg:col-span-3"><p className="text-sm mt-2 text-white">{message}</p></div>}
      </form>
    </div>
  );
}
