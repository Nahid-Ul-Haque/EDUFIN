"use client"
import "../../../app/globals.css";

import Providers from "../../providers";

import { Roboto_Serif } from "next/font/google";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";


const Roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Edu-Fin",
  description: "This is a educational system",
};




export default function RootLayout({ children }) {

  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);






  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={Roboto.className}>
        <Providers>

        <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Sidebar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
        </Providers>
      </body>
    </html>
  );
}