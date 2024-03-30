import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';

const PrivacyPolicy = ({ user }) => {
  return (
    <>
      <Navbar 
				userRole={user} 
			/>

      <PageBanner 
        pageTitle='Privacy Policy' 
        pageName='Privacy Policy'
      />

      <PrivacyPolicyContent />
 
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
