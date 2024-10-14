// /components/Guides/index.tsx
import GuideList from "./GuidesList";
import GuidesMainContent from "./GuidesMainContent";
import GuidesTableOfContents from "./GuidesTableOfContents";

const GuidesIndex = ({ guide, projectName, authorName }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <GuideList projectName={projectName} guide={guide} />
      <GuidesMainContent guide={guide} authorName={authorName} />
      <GuidesTableOfContents content={guide.full_content} />
    </div>
  );
};

export default GuidesIndex;