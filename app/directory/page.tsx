// exploresol/app/directory/page.tsx
import Directory from '@/components/directory';
import { title } from '@/components/primitives';


export default function DirectoryPage() {
  return (
    <div>
      <h1 className={title()}>Solana dApps & Tools Directory</h1>
      <Directory />
    </div>
  );
}
