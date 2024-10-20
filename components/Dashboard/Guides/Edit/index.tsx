// /components/Dashboard/Guides/Edit/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Guide {
  id: string;
  title: string;
  short_title: string;
  moderation_status: string;
  image_url: string;
  created_at: string;
}

interface GuidesEditIndexProps {
  guides: Guide[];
}

const GuidesEditIndex: React.FC<GuidesEditIndexProps> = ({ guides }) => {
  const groupedGuides = guides.reduce((acc, guide) => {
    const status = guide.moderation_status || 'pending';
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(guide);
    return acc;
  }, {} as Record<string, Guide[]>);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Guides</h1>
      {Object.entries(groupedGuides).map(([status, statusGuides]) => (
        <div key={status} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{status} Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statusGuides.map((guide) => (
              <div key={guide.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={guide.image_url || '/placeholder-image.jpg'}
                  alt={guide.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-400 mb-4">{guide.short_title}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Created: {new Date(guide.created_at).toLocaleDateString()}
                    </span>
                    <Link
                      href={`/dashboard/guides/edit/${guide.id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuidesEditIndex;