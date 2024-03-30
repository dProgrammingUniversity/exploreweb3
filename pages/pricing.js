import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import PricingTable from "../components/Pricing/PricingTable";

const Pricing = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <PageBanner pageTitle="Pricing" pageName="Pricing" />

      <PricingTable />

      <Footer />
    </>
  );
};

export default Pricing;
