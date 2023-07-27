"use client";
import React, { Suspense } from "react";
import LoginPage from "../../../Components/LogInPage/LoginPage";
import Loading from "./loading";

const LogIn = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <LoginPage />
      </Suspense>
    </>
  );
};

export default LogIn;
