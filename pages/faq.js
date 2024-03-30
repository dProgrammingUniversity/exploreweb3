import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import FaqContent from "../components/Faq/FaqContent";

const Faq = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        pageName="Frequently Asked Questions"
      />

      <FaqContent />

      <Footer />
    </>
  );
};

export default Faq;
