import React from "react";
import Navbar from "../components/_App/Navbar";
import GoogleMap from "../components/Contact/GoogleMap";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";

const Contact = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <GoogleMap />

      <ContactInfo />

      <ContactForm />

      <Footer bgColor="bg-f9f9f9" />
    </>
  );
};

export default Contact;
