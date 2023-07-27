"use client";
import React, { Suspense } from "react";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Business from "../Business/Business";
import Billing from "../Billing/Billing";
import CardDeal from "../CardDeal/CardDeal";
import Testimonials from "../Testimonials/Testimonials";
import Clients from "../Clients/Clients";
import CTA from "../CTA/CTA";
import Loading from "./loading";

const MainPage = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <Hero />
        <Features />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </Suspense>
    </>
  );
};

export default MainPage;
