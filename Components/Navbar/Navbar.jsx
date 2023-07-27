"use client";
import { Dialog, Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Themebutton from "../Themebutton/Themebutton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white scroll-smooth relative top-0">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src="/Edufin.png" width="100" height="100" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-800"
              >
                HOME
              </Link>
            </Popover>

            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-800"
            >
              ABOUT
            </Link>
            <Link
              href="/faq"
              className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-800"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-800"
            >
              CONTACT US
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            {/* <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign up <span aria-hidden="true">&rarr;</span>
            </Link> */}

            <Link
              href="/login"
              className="inline-block rounded-md border border-transparent bg-slate-700 px-8 py-3 text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              Sign In / Register
            </Link>

            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-800"
            >
              <Themebutton></Themebutton>
            </Link>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src="/Edufin.png" width="100" height="100" alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ABOUT
                  </Link>
                  <Link
                    href="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    CONTACT US
                  </Link>
                </div>
                <div className="py-6">
                  {/* <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Up
                  </Link> */}
                  <Link
                    href="/login"
                    className="inline-block rounded-md border border-transparent bg-slate-700 px-8 py-3 text-center font-medium text-white hover:bg-slate-800"
                  >
                    Sign In / Register
                  </Link>
                </div>
                <Themebutton></Themebutton>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
