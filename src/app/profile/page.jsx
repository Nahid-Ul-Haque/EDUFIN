"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <>
      <div>
        <button className="inline-block rounded-md border border-transparent bg-slate-700 px-8 py-3 text-center font-medium text-white hover:bg-slate-800">
          Get USer
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
