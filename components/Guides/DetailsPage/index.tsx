// /components/Guides/DetailsPage/index.tsx
import GuideList from "./GuidesList";
import GuidesMainContent from "./GuidesMainContent";
import GuidesTableOfContents from "./GuidesTableOfContents";

const GuidesIndex = ({ guide, authorName, projectsMap }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <GuideList projectsMap={projectsMap} />
      <GuidesMainContent guide={guide} authorName={authorName} />
      <GuidesTableOfContents content={guide.full_content} />
    </div>
  );
};

export default GuidesIndex;