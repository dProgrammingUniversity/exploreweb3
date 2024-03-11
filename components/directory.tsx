// exploresol/components/directory.tsx
"use client"
import { SetStateAction, useState } from 'react';
import Link from 'next/link';


//Categories and statuses for filtering
const categories = [
  'Finance', 'Game', 'Analytics', 'Wallet', 'Exchange', 
  'Multichain', 'Development Tool', 'NFT', 'Marketplace', 'Social', 
  'DAO', 'Infrastructure', 'Identity', 'Privacy', 'Storage', 
  'Oracle', 'Education', 'Content', 'Other'
];
const statuses = ['live', 'maintenance', 'coming soon'];


const Directory = ({dApps}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredDApps = dApps.filter(
    (dApp) =>
      (dApp.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterCategory === 'All' || dApp.category === filterCategory) &&
      (filterStatus === 'All' || dApp.status === filterStatus)
  );

  const sortedDApps = filteredDApps.sort((a, b) => a.name.localeCompare(b.name));

  // Pagination: Calculate the right dApps to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDApps = sortedDApps.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);


  return (
    <div className="container mx-auto px-4">
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 md:mb-0"
          placeholder="Search for dApps..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
          ))}
        </select>
        <select
          className="p-2 border rounded"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {statuses.map((status, idx) => (
            <option key={idx} value={status}>{status}</option>
          ))}
        </select>
        <button
          onClick={() => setIsListView(!isListView)}
          className="p-2 border rounded"
        >
          {isListView ? 'Grid View' : 'List View'}
        </button>
      </div>

      {/* Display dApps */}
      <div className={isListView ? 'flex flex-col' : 'grid md:grid-cols-3 gap-4'}>
        {currentDApps.map((dApp) => (
          <Link key={dApp.slug} href={`/directory/${dApp.slug}`} passHref>
            <div className="border p-4 rounded-lg shadow mb-4 ">
              <h3 className="text-xl font-semibold text-purple-500">{dApp.name}</h3>
              <p className="text-gray-600">{dApp.description}</p>
              <p className="text-sm mt-2"><strong>Category:</strong> {dApp.category}</p>
              <p className="text-sm"><strong>Status:</strong> {dApp.status}</p>
              {/* More dApp details here */}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(Array(Math.ceil(sortedDApps.length / itemsPerPage)).keys()).map(number => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`p-2 border rounded mx-1 ${currentPage === number + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Directory;