import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from './../components/Blog/BlogDetailsContent';
import Footer from '../components/_App/Footer';

const SingleBlog = ({ user }) => {
  return (
    <>
      <Navbar 
        userRole={user}  
      />

      <PageBanner 
        pageTitle='Blog Details' 
        pageName='Blog Details' 
      />

      <BlogDetailsContent />
      
      <Footer />
    </>
  );
};

export default SingleBlog;