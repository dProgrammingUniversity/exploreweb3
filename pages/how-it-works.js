import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import HowItWorks from '../components/Common/HowItWorks';
import HowItWorksSteps from '../components/HowItWork/HowItWorksSteps';
import Footer from '../components/_App/Footer';

const HowItWork = ({ user }) => {
  return (
    <>
      <Navbar 
				userRole={user} 
			/>

      <PageBanner 
        pageTitle='How it works' 
        pageName='How it works' 
      />

      <HowItWorksSteps />
      
      <HowItWorks 
        bgColor="bg-f9f9f9"
      />

      <Footer />
    </>
  );
};

export default HowItWork;
