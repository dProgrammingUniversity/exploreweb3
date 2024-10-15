// /components/Guides/index.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GuidesIndex = ({ latestGuides, projects }) => {
  const [currentGuidePage, setCurrentGuidePage] = useState(1);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const guidesPerPage = 12;
  const projectsPerPage = 12;

  // Pagination logic for guides
  const indexOfLastGuide = currentGuidePage * guidesPerPage;
  const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
  const currentGuides = latestGuides.slice(indexOfFirstGuide, indexOfLastGuide);

  // Pagination logic for projects
  const indexOfLastProject = currentProjectPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginateGuides = (pageNumber) => setCurrentGuidePage(pageNumber);
  const paginateProjects = (pageNumber) => setCurrentProjectPage(pageNumber);

  return (
    <div className="flex-grow pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto w-full max-w-none px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Explore Web3 Guides</h1>
        <p className="text-xl mb-8 text-center text-gray-300">
          Discover the latest guides and resources in the Web3 ecosystem. Explore guides by project and enhance your knowledge.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Latest Guides</h2>
          <p className="text-lg mb-4 text-gray-300">
            Stay updated with the newest guides in the Web3 space. Dive into detailed tutorials and insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentGuides.map((guide) => (
              <Link href={`/guides/${guide.listings.slug}/${guide.slug}`} key={guide.slug} className="block">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <Image
                    src={guide.image_url}
                    alt={guide.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{guide.short_title}</h2>
                    <p className="text-gray-400 mb-4">{guide.summary_content.substring(0, 100)}...</p>
                    <span className="text-blue-500 hover:underline">Read more</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            itemsPerPage={guidesPerPage}
            totalItems={latestGuides.length}
            paginate={paginateGuides}
            currentPage={currentGuidePage}
          />
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Guides by Project</h2>
          <p className="text-lg mb-4 text-gray-300">
            Explore guides categorized by project. Find resources tailored to specific Web3 projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <Link href={`/guides/${project.slug}`} key={project.id} className="block">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <span className="text-blue-500 hover:underline">Explore {project.name} Guides</span>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            itemsPerPage={projectsPerPage}
            totalItems={projects.length}
            paginate={paginateProjects}
            currentPage={currentProjectPage}
          />
        </section>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i as never);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button onClick={() => paginate(number)} className="px-3 py-1 bg-gray-700 text-white rounded">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuidesIndex;