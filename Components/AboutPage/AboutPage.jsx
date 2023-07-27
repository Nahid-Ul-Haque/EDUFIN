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
              We didnt reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src="/about_1.jpg"
              alt="office content 1"
              width="200"
              height="400"
              loading="lazy"
            />
            <Image
              className="w-full rounded-lg about"
              src="/about_2.jpg"
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
              Powering innovation at{" "}
              <span className="font-extrabold">200,000+</span> companies
              worldwide
            </h2>
            <p className="mb-4 font-light">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className="mb-4 font-medium">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <Link
              href="#"
              className="inline-flex items-center font-medium text-indigo-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 bg-purple-200 dark:bg-gray-900">
          <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 dark:bg-gray-900">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Graphic Design
                  </h3>
                  <p className="mb-6">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                  <Link href="#" className="block font-medium text-purple-600">
                    Know more
                  </Link>
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
                  <h3 className="text-2xl font-semibold text-white">
                    UI Design
                  </h3>
                  <p className="mb-6">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                  <Link href="#" className="block font-medium text-indigo-600">
                    Know more
                  </Link>
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
                  <h3 className="text-2xl font-semibold text-white">
                    UX Design
                  </h3>
                  <p className="mb-6">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                  <Link href="#" className="block font-medium text-indigo-600">
                    Know more
                  </Link>
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
