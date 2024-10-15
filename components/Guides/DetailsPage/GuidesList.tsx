// /components/Guides/DetailsPage/GuidesList.tsx
import Link from 'next/link';

const GuideList = ({ projectsMap }) => {
  return (
    <aside className="w-full lg:w-1/4 p-4">
      {Object.entries(projectsMap).map(([projectName, guides]) => {
        const projectSlug = projectName.toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={projectName}>
            <h2 className="text-xl font-bold">{projectName}</h2>
            <ul>
              {Array.isArray(guides) && guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${projectSlug}/${guide.slug}`} className="text-blue-500">
                    {guide.short_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default GuideList;