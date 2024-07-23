import React from "react";
import { Link } from "react-router-dom";

const CardsWebsite = () => {
  return (
<div className="p-9 m-9 border-2 border-gray-600 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2022/06/16/11/14/web-development-7265717_1280.png"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4 ">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Web App Development
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Web-App Development includes Blog-site, E-Commerce Store,
                Porfolio sites, etc.
              </p>
              <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  to={"/form"}
                >
                  Get a Free Qoute
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Android App Development
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Android App development is the development , design, testing or deploying application
              that help the companies to show their presence on Smart Phones, Tablets etc.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/07/03/17/23/iphone-830480_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                IOS App Development 
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              IOS App development is the development , design, testing application
              that help the companies to show their presence on Apple Phones, iPads, smartwatches etc.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                UI/UX  
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              UI is the part of UX that decide to how App looks or what design is attractive for user while UX specify that how it help the user to attain its requirement.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwJTIwdGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                App Testing
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              App testing is the step in Development in which developer check the functionality, frameworks or error in App.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/form"}
              >
                Get a Free Qoute
              </Link>
            </div>
          </article>
        </div>
 
      </div>
    </div>
  );
};

export default CardsWebsite;
