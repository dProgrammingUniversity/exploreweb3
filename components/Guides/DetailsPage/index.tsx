// /components/Guides/DetailsPage/index.tsx
import GuideList from "./GuidesList";
import GuidesMainContent from "./GuidesMainContent";
import GuidesTableOfContents from "./GuidesTableOfContents";
import './styles.css';

const GuidesIndex = ({ guide, authorName, projectsMap }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900">
      <div className="lg:w-0.5/4 bg-gray-800 p-6 overflow-y-auto">
        <GuideList projectsMap={projectsMap} />
      </div>
      <div className="lg:w-2/4 bg-gray-900 p-6 overflow-y-auto">
        <GuidesMainContent guide={guide} authorName={authorName} />
      </div>
      <div className="lg:w-1/4 bg-gray-800 p-6 overflow-y-auto sticky-toc">
        <GuidesTableOfContents content={guide.full_content} />
      </div>
    </div>
  );
};

export default GuidesIndex;