import React from 'react'
import { Link } from 'react-router-dom'

const CardsYoutube = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border-2 p-4 rounded border-gray-700">
        <article className="group">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4 ">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Youtube Automation
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube Automation is the emerging field in Video Editing. It help the user to make video in less time.
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
            src="https://media.istockphoto.com/id/2152762173/photo/cash-cow.webp?b=1&s=170667a&w=0&k=20&c=W8S5taUSLmTcS8gq4eRE-pXb9cI7GhtNFS5nTp4fuF4="
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              CashCow Content
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            CashCow is one of the best field in Youtube Animation. It allows the content creator to make videos in which he/she not used his/her face.
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
            src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvc3xlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Long Videos
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube is the 2nd largest search engine in Internet World.It is done by various tools available in market so it reduce the cost, time and increase the quality of video.            </p>
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
            src="https://cdn.pixabay.com/photo/2017/08/07/22/57/technology-2608867_1280.jpg"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Short Videos
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube Shorts Editing is the emerging field in Video Editing.Quality of Shorts help you to grow your Youtube Channel. 
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
            src="https://plus.unsplash.com/premium_photo-1683140721527-262985d7c8ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Podcast Videos
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube Podcast is the emerging field nowadays.Quality of Podcast helps you to engage the Viewers. 
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
            src="https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_640.jpg"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Live Streaming
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube Live Streaming is the emerging field in Youtube Video Editing. Quality of Live Streaming help you to engage the viewers and grow your Youtube Channel.
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
            src="https://images.unsplash.com/photo-1659854154826-bfee6b3dc8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Vlogs Editing              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube Vlogs is the emerging field in Youtube videos.Quality of videos(Vlogs) help you to increase the viewers and  grow your Youtube Channel.            </p>
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
  </div>  )
}

export default CardsYoutube