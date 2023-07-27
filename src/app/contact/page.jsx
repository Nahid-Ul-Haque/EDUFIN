"use client";
import React, { Suspense } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ContactPage from "../../../Components/ContactPage/ContactPage";
import Loading from "./loading";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={Loading}>
        <ContactPage />
      </Suspense>

      <Footer />
    </>
  );
};

export default Contact;
