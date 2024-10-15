// /components/Guides/GuidesList.tsx
const GuideList = ({ projectsMap }) => {
  return (
    <aside className="w-full lg:w-1/4 p-4">
      {Object.entries(projectsMap).map(([projectName, guides]) => (
        <div key={projectName}>
          <h2 className="text-xl font-bold">{projectName}</h2>
          <ul>
            {Array.isArray(guides) && guides.map((guide) => (
              <li key={guide.slug}>
                <a href={`/guides/${guide.slug}`} className="text-blue-500">
                  {guide.short_title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default GuideList;