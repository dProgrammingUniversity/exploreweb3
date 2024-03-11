// exploresol/pages/directory/index.tsx
import { title } from '@/components/primitives';
import { GetStaticProps } from 'next';
import Directory from '@/components/directory';
import { getDirectorySummaries } from './getDirectorySummaries';

export const getStaticProps: GetStaticProps = async () => {
  const dApps = getDirectorySummaries();
  return { props: { dApps } };
};


const DirectoryPage = ({ dApps }) => {
//   return <Directory dApps={dApps} />;
return (
    <div>
      <h1 className={title()}>Solana dApps & Tools Directory</h1>
      <Directory dApps={dApps} />
    </div>
  );
};

export default DirectoryPage;