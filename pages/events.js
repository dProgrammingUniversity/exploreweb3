import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import EventsCard from "../components/Events/EventsCard";
import Footer from "../components/_App/Footer";

const Events = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <PageBanner pageTitle="Events" pageName="Events" />

      <EventsCard />

      <Footer />
    </>
  );
};

export default Events;
