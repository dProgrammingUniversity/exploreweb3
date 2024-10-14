// /components/Guides/GuidesList.tsx
const GuideList = ({ projectName, guide }) => {
    return (
      <aside className="w-full lg:w-1/4 p-4">
        <h2 className="text-xl font-bold">{projectName}</h2>
        <ul>
          <li>
            <a href={`/guides/${guide.slug}`} className="text-blue-500">
              {guide.short_title}
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default GuideList;