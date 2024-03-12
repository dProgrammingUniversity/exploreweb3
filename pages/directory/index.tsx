// exploresol/pages/directory/index.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Directory from '@/components/directory'; 


export const getStaticProps: GetStaticProps = async () => {
  const directoryPath = path.join(process.cwd(), 'directorycontents');
  const filenames = fs.readdirSync(directoryPath);

  const dApps = filenames.map((filename) => {
    const filePath = path.join(directoryPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });

  return { props: { dApps } };
};

const DirectoryPage = ({dApps}: {dApps: any[]}) => {
  return <Directory dApps={dApps} />;
};

export default DirectoryPage;
