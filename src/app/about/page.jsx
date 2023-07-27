"use client";
import React, { Suspense } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import AboutPage from "../../../Components/AboutPage/AboutPage";
import Loading from "./loading";

const About = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={Loading}>
        <AboutPage />
      </Suspense>
      <Footer />
    </>
  );
};

export default About;
