import React from "react";
import { Link } from "react-router-dom";

const CardsSocial = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-2 p-4 rounded border-gray-700">
          <article className="group">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1594670297948-e910d5964979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4 ">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Facebook (ID & Page) Management{" "}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Facebook ID and Page management is the type of SMM that help the
                organization to manage their Pages and ID of Facebook.
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
              src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Instagram Management
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Instagram ID&Page management is the type of SMM that help the organization to manage their Instagram Pages. 
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
              src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlrdG9rJTIwYWRzfGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                TikTok Management       
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Tiktok ID&Page management is the type of SMM that help the organization to manage Tiktok account.
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
              src="https://cdn.pixabay.com/photo/2016/01/24/11/17/youtube-1158693_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Youtube Management
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Youtube management is the type of SMM that help the organization to manage their Youtube Account.
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
              src="https://cdn.pixabay.com/photo/2014/10/12/12/38/google-485611_640.jpg"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Google Management
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Google Account management is the type of SMM that help the organization to manage their Google account.
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
              src="data:image/jpeg;base64,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"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                X Management
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                X (also known as Twitter in Past) management is the type of SMM that help the organization to manage their X-Pages.
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
              src="https://images.unsplash.com/photo-1659436344214-b9f5fd7f0940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGludGVyZXN0fGVufDB8fDB8fHww"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Pinterest Management 
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Pinterest management is the type of SMM that help the organization to manage their Pinterest-Pages.
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

export default CardsSocial;
