// /components/Category/CategoryFAQ.tsx
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface CategoryFAQProps {
  categoryName: string;
  totalListings: number;
}

const CategoryFAQ: React.FC<CategoryFAQProps> = ({ categoryName, totalListings }) => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  // Helper function to format project count text
  const formatProjectCount = (count: number) => {
    return count > 0 ? `${count}+` : "various";
  };
  
    // FAQ data structure with dynamic content
  const faqs = [
    {
      question: `What are the Top Best Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Explore our curated list of top best ${formatProjectCount(totalListings)} Web3/Solana ${categoryName} Projects on ExploreWeb3. Our platform regularly updates rankings based on community engagement, development activity, and user adoption. Use our filtering tools to discover the most promising ${categoryName} projects in the Web3/Solana ecosystem.`
    },
    {
      question: `How can I discover New/Upcoming Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `ExploreWeb3 makes it easy to discover new and upcoming Web3/Solana ${categoryName} Projects. From "Others" dropdown menu, Go to "Solana Ecosystem Projects" Page and Use our 'All Statuses' filter to find "live" or "Upcomming" projects in development or about to launch. Our platform provides early access to information about new/upcoming ${categoryName} projects, helping you stay ahead of the curve in the Solana ecosystem.`
    },
    {
      question: `What makes a Web3/Solana ${categoryName} Project successful?`,
      answer: `Successful Web3/Solana ${categoryName} Projects typically demonstrate strong community engagement, innovative technology, transparent development, and clear utility. On ExploreWeb3, you can evaluate projects based on these criteria using our comprehensive project profiles and community feedback system.`
    },
    {
      question: `How do I evaluate Web3/Solana ${categoryName} Projects before participating?`,
      answer: `ExploreWeb3 provides detailed information about each ${categoryName} project, including team background, development status, roadmap, pros, cons and community feedback. Use our platform's filtering and sorting tools to compare different projects and make informed decisions based on your specific interests and requirements.`
    },
    {
      question: `What are the latest trends in Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Stay updated with the latest Web3/Solana ${categoryName} trends through ExploreWeb3's regularly updated project listings. Our platform highlights new features, innovations, and developments in the ${categoryName} space, helping you identify emerging opportunities in the Solana ecosystem.`
    },
    {
      question: `How can I get early access to new Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `ExploreWeb3 helps you discover early-stage Web3/Solana ${categoryName} Projects before they become widely known. Follow our platform for regular updates, use our 'Recently Added' filter, and engage with project communities through our platform to get early access opportunities.`
    },
    {
      question: `What security features should I look for in Web3/Solana ${categoryName} Projects?`,
      answer: `When evaluating Web3/Solana ${categoryName} Projects on ExploreWeb3, check for transparent team information, pros, cons, and community ratings/reviews. Our platform helps making esssential info about web3/Solana projects accessible in one place but you still need to do your own due deligence (Do Your Own research) as our content is for educational purpose only and not for investment advise into any Web3/Solana project listed.`
    },
    {
      question: `How do I track the performance of Web3/Solana ${categoryName} Projects?`,
      answer: `ExploreWeb3 doesn't directly offer this but you can check our list of multiple Web3/Solana Anayltics/Stats tools that offers comprehensive tracking tools for Web3/Solana ${categoryName} Projects. Monitor project growth, community engagement, and development progress through our platform's analytics and regular updates.`
    },
    {
      question: `What are the most innovative Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Discover innovative Web3/Solana ${categoryName} Projects through ExploreWeb3's curated listings. Our platform highlights projects with unique features, breakthrough technologies, and novel approaches to solving real-world problems in the ${categoryName} space.`
    },
    {
      question: `How can I participate in Web3/Solana ${categoryName} Project communities in ${currentYear}?`,
      answer: `ExploreWeb3 connects you directly with Web3/Solana ${categoryName} Project communities. Find official social links, community channels, and engagement opportunities for each project listed on our platform.`
    },
    {
      question: `What are the best resources for learning about Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `ExploreWeb3 serves as a comprehensive resource for Web3/Solana ${categoryName} Projects, offering detailed project descriptions, educational content, and community insights. Use our platform to learn about different aspects of ${categoryName} projects in the Solana ecosystem.`
    },
    {
      question: `How do I identify promising Web3/Solana ${categoryName} Projects early in ${currentYear}?`,
      answer: `ExploreWeb3 helps you identify promising Web3/Solana ${categoryName} Projects through our early-stage project listings, community feedback system, and comprehensive project evaluation tools. Use our filters to find projects in development phases with strong potential.`
    },
    {
      question: `What funding opportunities exist for Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Discover funding opportunities for Web3/Solana ${categoryName} Projects through ExploreWeb3's platform. ExploreWeb3 platform provides information about Web3 ecosystems projects and their opportunities like grants, investments, funding rounds, jobs, bounty, RFPs in the ${categoryName} space.`
    },
    {
      question: `How do I stay updated with Web3/Solana ${categoryName} Project developments?`,
      answer: `Stay informed about Web3/Solana ${categoryName} Project developments through ExploreWeb3's regular updates, project notifications, and community engagement features. ExploreWeb3 platform updates each Web3/Solana projects page with the latest and updates from across the ${categoryName} ecosystem.`
    },
    {
      question: `What are the common challenges in Web3/Solana ${categoryName} Projects?`,
      answer: `Understanding common challenges in Web3/Solana ${categoryName} Projects helps in better evaluation. ExploreWeb3 provides insights into project challenges, solutions, and best practices through our comprehensive project profiles and community feedback.`
    },
    {
      question: `How do I compare different Web3/Solana ${categoryName} Projects?`,
      answer: `ExploreWeb3's comparison tools help you evaluate different Web3/Solana ${categoryName} Projects based on features, pros, cons, development activity, and other key metrics. Use our filtering and sorting options to make informed comparisons.`
    },
    {
      question: `What role does community play in Web3/Solana ${categoryName} Projects?`,
      answer: `Community is crucial for Web3/Solana ${categoryName} Projects' success. ExploreWeb3 helps you assess community engagement, participation, and growth through our platform's community metrics and engagement tools.`
    },
    {
      question: `How can I contribute to Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Find contribution opportunities in Web3/Solana ${categoryName} Projects through ExploreWeb3's comprehensive project listings. Our platform connects you with projects seeking contributors, developers, and community members.`
    },
    {
      question: `What are the future prospects for Web3/Solana ${categoryName} Projects in ${currentYear}?`,
      answer: `Explore the future of Web3/Solana ${categoryName} Projects through ExploreWeb3's trend analysis and ecosystem insights. Our platform helps you understand market direction and identify long-term opportunities in the ${categoryName} space.`
    },
    {
      question: `How do I verify the authenticity of Web3/Solana ${categoryName} Projects?`,
      answer: `ExploreWeb3 helps provide essential and helpful info about Web3/Solana ${categoryName} Projects through our indepth review of each project, community feedback, and comprehensive project information. Use our platform to learn about projects BUT you still need to Do Your Own Research and consult professionals before investing into any Web/Solana project to avoid potential risks. All ExploreWeb3 content are for EDUCATIONAL puporses only and DOES NOT constitute advise for trading, investment, token purchase, nft minting or other financial/investment/development activities for any Web3/Solana projects discussed. ALWYAS DO YOUR OWN RESEARCH AND YOU WILL BE RESPONSIBLE FOR YOUR DESICION AND LOSSES! `
    }
  ];

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl  p-2">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Web3/Solana {categoryName} Projects FAQs
        </h2>

        <h3 className="text-2xl font-bold text-purple-300 mb-8">
          Answers To Frequently Asked Questions About Web3/Solana {categoryName} Projects
        </h3>
        
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-500 px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-900`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default CategoryFAQ;