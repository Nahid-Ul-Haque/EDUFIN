"use client";
import React, { Suspense } from "react";
import SignUpPage from "../../../Components/SignUpPage/SignUpPage";
import Loading from "./loading";

const SignUp = () => {
  return (
    <>
      <Suspense fallback={Loading}>
        <SignUpPage />
      </Suspense>
    </>
  );
};

export default SignUp;
