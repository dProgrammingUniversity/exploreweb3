import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogPost from "./../components/Blog/BlogPost";
import Footer from "../components/_App/Footer";

const Blog = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />
      
      <PageBanner pageTitle="Blog" pageName="Blog" />

      <BlogPost />

      <Footer />
    </>
  );
};

export default Blog;
