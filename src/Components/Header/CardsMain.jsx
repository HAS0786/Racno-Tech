import React from "react";
import { Link } from "react-router-dom";

const CardsMain = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="border-2 p-4 rounded border-gray-700"> 
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
              Web/App Development
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Web/App development is the development , testing, design, building or deploying of
                        web-application that help the companies to show their presence on Internet.
              </p>
              <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  to={"/website"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                  Graphic Design
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Graphic Design is the emerging field in the era of Digital World. It helps in making Visual and
              Textual content to communicate others.
              </p>
              <div class="flex flex-col mt-5 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  to={"/graphic"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1683842640591-210c38313e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                  Youtube Animation
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Youtube have the about 2.70 billion daily active user that make it Second Largest Social Media Platform. About 54% active user in World of Youtube.
              </p>
              <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  to={"/youtubeAnim"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1656164630621-8974e3a7e85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWElMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                Social Media Management 
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Social Media Management (SEM) is the process of managing the Company's online Presence on Internet/Social Media.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/socialMedia"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U0VPfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                  SEO
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              SEO is the process of making your website to get a higher ranking in
              organic search results and consequently more organic traffic.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/seo"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1665799871677-f1fd17338b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2Vib29rJTIwYWRzfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                Digital Marketing
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Digital Marketing is the latest way of marketing through Internet.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/digitalmarketing"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2022/07/13/21/57/editing-7320125_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                Video Editing
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Video Editing is the process of creating the videos through different files , cut off the clips or also add the effects to make an attractive videos to engage the viewers.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/videoEditing"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1566207474742-de921626ad0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29yZHByZXNzfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-center text-gray-900 dark:text-white">
                WordPress
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              WordPress is the free and open-source CMS(Content-Management-System) in which we make websites,
              LMS , E-commerce stores etc with Plugins and Themes.
              </p>
            </div>
            <div class="flex flex-col space-y-4 mt-5 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/wordpress"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpcnR1YWwlMjBhc3Npc3RhbnR8ZW58MHx8MHx8fDA%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg text-center font-medium text-gray-900 dark:text-white">
                Virtual Assistant
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                to={"/assistant"}
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CardsMain;
