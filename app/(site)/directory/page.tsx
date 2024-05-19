// /directory/page.tsx
import DirectoryPage from "@/components/Directory/DirectoryPage";
import EmailSubscriptionForm from "@/components/Directory/Newsletter/EmailSubscriptionForm";
import AnimatedTitle from "@/components/Directory/AnimatedTitle";
import { Metadata } from "next";

// Define fixed metadata values
const title = "1,000+ Solana Projects Directory - Explore Solana";
const description = "Earn Using and Exploring Solana Projects";
const ogImage =
  "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

export const metadata: Metadata = {
  title: title,
  description: description,
  // other metadata 
}; 

const DirectoryHomePage = () => {
  
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-7.5">
            {/* Top text section with highlighted text */}
            <EmailSubscriptionForm />

            {/* Animated text component */}
            <AnimatedTitle />

            {/* Directory Page */}
            <DirectoryPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectoryHomePage;
