import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import TermsConditionContent from '../components/TermsAndCondition/TermsConditionContent';

const TermsAndCondition = ({ user }) => {
  return (
    <>
      <Navbar 
				userRole={user} 
			/>

      <PageBanner 
        pageTitle='Terms And Condition' 
        pageName='Terms And Condition'
      />

      <TermsConditionContent />
 
      <Footer />
    </>
  );
};

export default TermsAndCondition;
