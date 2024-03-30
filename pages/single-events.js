import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import EventDetailsContent from '../components/Events/EventDetailsContent';

const SingleEvents = ({ user }) => {
  return (
    <>
      <Navbar 
        userRole={user}
      />

      <PageBanner 
        pageTitle='Events' 
        pageName='Events' 
      />
      
      <EventDetailsContent />
      
      <Footer />
    </>
  );
};

export default SingleEvents;
