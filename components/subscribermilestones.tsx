"use client"
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const SubscriberMilestones = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const milestones = [
    { target: 1, day: 2, date: '6th March 2024' },
    { target: 10, day: 6, date: '10th March 2024' },
    { target: 100, day: 'TBA', date: 'TBA' },
    { target: 500, day: 'TBA', date: 'TBA' },
    { target: 750, day: 'TBA', date: 'TBA' },
    { target: 1000, day: 'TBA', date: 'TBA' },
    { target: 2000, day: 'TBA', date: 'TBA' },
    { target: 3000, day: 'TBA', date: 'TBA' },
    { target: 4000, day: 'TBA', date: 'TBA' },
    { target: 5000, day: 'TBA', date: 'TBA' },
    { target: 6000, day: 'TBA', date: 'TBA' },
    { target: 7000, day: 'TBA', date: 'TBA' },
    { target: 8000, day: 'TBA', date: 'TBA' },
    { target: 9000, day: 'TBA', date: 'TBA' },
    { target: 10000, day: 'TBA', date: 'TBA' },
  ];

  return (
    <div className="bg-purple-700 p-4 rounded-lg shadow mt-4 max-w-md mx-auto">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Click here for subscriber stats</span>
        {isExpanded ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </button>
      <div className={`mt-4 ${isExpanded ? 'block' : 'hidden'}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscriber Target
              </th>              
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Achieved
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {milestones.map((milestone, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">{milestone.day}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{milestone.target}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{milestone.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriberMilestones;
