// /components/Guides/DetailsPage/GuidesTableOfContents.tsx
"use client"
import { useEffect, useState, useRef } from "react";
import './styles.css';


type Heading = {
  text: string;
  id: string;
  level: number;
};

const GuidesTableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingsArray = Array.from(headingElements).map((heading) => ({
      text: heading.textContent || "",
      id: heading.textContent
        ? heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : "",
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setHeadings(headingsArray);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -80% 0%" }
    );

    headingsArray.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [content]);

  useEffect(() => {
    if (tocRef.current && activeId) {
      const activeElement = tocRef.current.querySelector(`a[href="#${activeId}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeId]);

  return (
    <nav className="text-gray-300 sticky top-20 max-h-[calc(100vh-80px)] overflow-y-auto" ref={tocRef}>
      <h2 className="text-2xl font-bold mb-4 text-white">Table of Contents</h2>
      <ul className="space-y-2 relative">
        <div className="absolute left-0 w-0.5 bg-blue-500 transition-all duration-200" style={{
          top: `${headings.findIndex(h => h.id === activeId) * 28}px`,
          height: '28px'
        }}></div>
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            style={{ marginLeft: `${(heading.level - 2) * 20}px` }}
            className={`transition-colors duration-200 ${activeId === heading.id ? 'text-blue-500' : ''}`}
          >
            <a
              href={`#${heading.id}`}
              className="hover:text-blue-500 transition-colors block py-1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
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