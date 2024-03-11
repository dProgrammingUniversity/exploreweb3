// utils/getDirectorySummaries.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getDirectorySummaries = () => {
  const directoryPath = path.join(process.cwd(), 'directorycontents');
  const filenames = fs.readdirSync(directoryPath);

  return filenames.map((filename) => {
    const filePath = path.join(directoryPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });
};
