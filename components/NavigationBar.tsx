// ExploreSol/components/NavigationBar.tsx
import AuthButton from "@/components/AuthButton";
import Link from 'next/link';

export default async function NavigationBar() {


  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          Latest: Jupiter exchange is launching a new features - Stay in loop to  
          <Link href="https://Jup.ag" target="_blank" rel="noopener noreferrer"> CLAIM HERE NOW!</Link>
        </div>

        <nav className="w-full flex justify-center border-b border-b-foreground/10">
          <div className="w-full max-w-4xl flex justify-between items-center p-3">
            <div className="flex-1 flex justify-start space-x-4">
              <Link href="/" className="btn">Home</Link>
              
            </div>
            <div className="flex-1 flex justify-end">
              {/* <DeployButton /> */}
              <Link href="/directory" className="btn">Directory</Link>
              <Link href="/dashboard" className="btn">Dashboard</Link>
              <Link href="/about" className="btn">About</Link>
              <Link href="/roadmap" className="btn">Roadmap</Link>
              <Link href="/s" className="btn">S</Link>
              <AuthButton />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
