// /components/Guides/GuidesTableOfContents.tsx
"use client"
import { useEffect, useState } from "react";

type Heading = {
  text: string;
  id: string;
};

const GuidesTableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h1, h2");
    const headingsArray = Array.from(headingElements).map((heading) => ({
      text: heading.textContent || "",
      id: heading.textContent
        ? heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : "",
    }));
    setHeadings(headingsArray);
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full lg:w-1/4 p-4">
      <h2 className="text-xl font-bold">Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-blue-500 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuidesTableOfContents;