/* eslint-disable react/display-name */
import Link from 'next/link'

import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { forwardRef } from "react";



const Sidebar = forwardRef((props, forwardedRef) => {

    const router = useRouter();
  return (
    <>
        <div ref={forwardedRef}  className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <Link href="/">
        
          <Image
          
            className="w-32 h-auto"
            src="/Edufin.png"
            alt="company logo"
            width="100"
            height="100"
      />
        
        </Link>
      </div>

      <div className="flex flex-col">
        <Link href= {{
          pathname:"../../profile/page.jsx",
        }}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == ""
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.push == "/"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.push == ""
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
});


// SideBar.displayName = "SideBar";


export default Sidebar;