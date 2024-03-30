import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import ErrorContent from '../components/404Error/ErrorContent';

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <PageBanner 
				pageTitle='404 Error' 
				pageName='404 Error' 
			/>

      <ErrorContent />

      <Footer />
    </>
  );
};

export default ErrorPage;
