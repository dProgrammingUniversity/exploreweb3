// /components/Guides/DetailsPage/GuidesList.tsx
import Link from 'next/link';

const GuideList = ({ projectsMap }) => {
  return (
    <aside className="text-gray-300">
      <Link href={`/guides`}>
        <h2 className="text-2xl font-bold mb-4 text-white text-blue-400 hover:text-yellow-500 transition-colors">
          All Guides
        </h2>
      </Link>
      {Object.entries(projectsMap).map(([projectName, guides]) => {
        const projectSlug = projectName.toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={projectName} className="mb-6">
            <Link href={`/guides/${projectSlug}`}>
              <h3 className="text-xl font-semibold mb-2 text-blue-400 hover:text-green-500 transition-colors">
                {projectName} Guides
              </h3>
            </Link>
            <ol className="list-decimal list-inside mt-2">
              {Array.isArray(guides) && guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${projectSlug}/${guide.slug}`} className="text-gray-300 hover:text-blue-500 transition-colors">
                    {guide.short_title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </aside>
  );
};

export default GuideList;