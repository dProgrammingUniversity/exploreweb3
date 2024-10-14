// /components/Guides/GuidesTableOfContents.tsx
"use client"
import { useEffect, useState } from "react";

type Heading = {
  text: string | null;
  id: string;
};

const GuidesTableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3");
    const headingsArray = Array.from(headingElements).map((heading) => ({
      text: heading.textContent,
      id: heading.id,
    }));
    setHeadings(headingsArray);
  }, [content]);

  return (
    <nav className="w-full lg:w-1/4 p-4">
      <h2 className="text-xl font-bold">Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="text-blue-500">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuidesTableOfContents;