"use client";
import React, { Suspense } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import FaqPage from "../../../Components/FaqPage/FaqPage";
import Loading from "./loading";

const Faq = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={Loading}>
        <FaqPage />
      </Suspense>

      <Footer />
    </>
  );
};

export default Faq;
