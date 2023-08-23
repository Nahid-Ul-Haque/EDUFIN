import React from "react";

const FaqPage = () => {
  return (
    <>
      <div>
        <section className="text-gray-700 bg-white dark:bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-gray-700  dark:text-white">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700  dark:text-white">
                Here are some frequently asked questions (FAQs) about using
                Next.js in an account management system
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is Next.js and how does it relate to an account
                    management system?
                  </summary>

                  <span className="text-gray-700  dark:text-white">
                    Next.js is a popular React framework that enables
                    server-side rendering and efficient routing for web
                    applications. In an account management system, Next.js can
                    enhance the user experience by providing faster page
                    loading, better SEO, and smoother navigation.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Why should I consider using Next.js for my account
                    management website?
                  </summary>

                  <span className="text-gray-700  dark:text-white">
                    Next.js offers benefits such as server-side rendering,
                    optimized performance, automatic code splitting, and
                    excellent developer experience. These features can lead to
                    improved page load times and a better overall user
                    experience in an account management system.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Is Next.js suitable for building responsive user interfaces
                    in an account management system?
                  </summary>

                  <span className="text-gray-700  dark:text-white">
                    Absolutely. Next.js supports responsive design principles,
                    allowing you to create interfaces that adapt to various
                    screen sizes and devices, essential for an account
                    management system accessed from different devices.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I implement client-side routing for different account
                    sections using Next.js?
                  </summary>

                  <span className="px-4 py-2 text-gray-700  dark:text-white">
                    Yes, Next.js supports client-side routing using its Link
                    component. You can easily create routes for different
                    account sections like transaction history, profile settings,
                    and account balances.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Are there any performance considerations when using Next.js
                    in an account management system?
                  </summary>

                  <span className="px-4 py-2 text-gray-700  dark:text-white">
                    While Next.js provides performance optimizations, it is
                    essential to optimize images, lazy load assets, and handle
                    data fetching efficiently to ensure optimal performance in
                    your account management system.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I deploy a Next.js account management system to various
                    hosting platforms?
                  </summary>

                  <span className="px-4 py-2 text-gray-700  dark:text-white">
                    Yes, you can deploy a Next.js app to various hosting
                    platforms like Vercel, Netlify, or your own server. Vercel
                    is particularly well-suited for Next.js applications due to
                    its seamless integration.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FaqPage;
