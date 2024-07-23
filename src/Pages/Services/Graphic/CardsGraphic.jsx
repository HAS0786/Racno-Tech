import React from "react";
import { Link } from "react-router-dom";

const CardsGraphic = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4 ">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Logo Designing
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                The abbreviation of "LOGO" stands for "Language of
                graphics-oriented". It is a symbol that is used to show the
                company's services, products etc.
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
              src="https://cdn.pixabay.com/photo/2015/01/08/18/12/startup-593305_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Cover Designing 
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              The Illustration and Pics are used in front
                                of different products like Books, magazine, music-album, CD , Comic book etc which
                                reflect the detail in that product.
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
              src="https://images.unsplash.com/photo-1632931612792-fbaacfd952f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Youtube Thumbnail 
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Youtube thumbnail is the important artwork in Graphic design that is used to engage the
              audience to watch video/shorts.
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

export default CardsGraphic;
