import Image from "next/image";
import React from "react";
import "./AboutPage.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Account Management System
            </h2>
            <p className="mb-4">
              An Account Management System is a comprehensive software platform
              that empowers individuals and businesses to effectively manage
              their financial accounts, transactions, and associated
              information. It streamlines the process of tracking, organizing,
              and securing financial data, contributing to better
              decision-making, improved efficiency, and enhanced customer
              satisfaction.
            </p>
            <p>
              The system records and categorizes transactions, making it easy
              for users to monitor their financial activities. This includes
              deposits, withdrawals, transfers, and payments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src="/about_7.png"
              alt="office content 1"
              width="200"
              height="400"
              loading="lazy"
            />
            <Image
              className="w-full rounded-lg about"
              src="/about_8.png"
              alt="office content 2"
              width="200"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Key Features
            </h2>
            <p className="mb-4 font-medium">
              <h5 className="text-gray-900 dark:text-white">
                User-Friendly Dashboard:
              </h5>
              A well-designed dashboard provides users with an overview of their
              accounts, balances, recent transactions, and alerts. It serves as
              a central hub for accessing all account-related information.
            </p>
            <p className="mb-4 font-medium">
              <h5 className="text-gray-900 dark:text-white">
                Security Measures:
              </h5>
              Data security is a top priority. The system employs encryption,
              two-factor authentication, and other security measures to protect
              sensitive financial information from unauthorized access.
            </p>
            <p className="mb-4 font-medium">
              <h5 className="text-gray-900 dark:text-white">
                Notifications and Alerts:
              </h5>
              Users receive alerts for low balances, suspicious transactions,
              payment due dates, and other important events, ensuring timely
              actions.
            </p>
            <p className="mb-4 font-medium">
              <h5 className="text-gray-900 dark:text-white">
                Mobile Accessibility:
              </h5>
              A mobile app version of the system allows users to manage their
              accounts on-the-go, enhancing convenience and accessibility.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 bg-purple-200 dark:bg-gray-900">
          <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 dark:bg-gray-900">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
                    Graphic Design
                  </h3>
                  <p className="mb-6">
                    Graphic design is the art and practice of creating visual
                    content to convey messages, information, or concepts. It
                    involves the use of typography, imagery, color, layout, and
                    other visual elements to create visually engaging and
                    aesthetically pleasing designs.
                  </p>
                </div>
                <Image
                  src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
                  className="w-2/3 ml-auto -mb-12"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 dark:bg-gray-900">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
                    UI Design
                  </h3>
                  <p className="mb-6">
                    UI design focuses on creating the visual layout and
                    interactive elements of digital interfaces, such as websites
                    and applications. It aims to make the users interaction with
                    the product efficient, intuitive, and aesthetically
                    pleasing.
                  </p>
                </div>
                <Image
                  src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                  className="w-2/3 ml-auto"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 dark:bg-gray-900">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold dark:text-white text-gray-900">
                    UX Design
                  </h3>
                  <p className="mb-6">
                    UX design focuses on the overall experience a user has while
                    interacting with a digital product. It encompasses the users
                    emotions, behaviors, perceptions, and interactions
                    throughout their journey.
                  </p>
                </div>
                <Image
                  src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
                  className="w-2/3 ml-auto "
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
