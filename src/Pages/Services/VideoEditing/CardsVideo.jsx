import React from 'react'
import { Link } from 'react-router-dom'

const CardsVideo = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border-2 p-4 rounded border-gray-700">
        <article className="group">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1658207951097-96f86cc0a1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVlbHN8ZW58MHx8MHx8fDA%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4 ">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Facebook/Instagram Reels
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Facebook/Instagaram Reels is the emerging fields in Video Editing as it attract the viewer in different aspects like Product showcase or show your Talent to the world. 
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
            src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              DropShipping Video Ads
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Drop-Shipping is the emerging field in E-commerce that engage the sellers to sell the products on Different Platforms without any burden of Stock.
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
            src="https://media.istockphoto.com/id/172144493/photo/cash-cow-on-pile-of-money-bills.webp?b=1&s=170667a&w=0&k=20&c=L0rPRHGauwrHe1R76T3z-HMAf4ieQtq00cuHG13BRaY="
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Cashcow Content
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            CashCow is one of the best field in Youtube Animation. It allows the content creator to make videos in which he/she not used his/her face.            </p>
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
            src="https://plus.unsplash.com/premium_photo-1709501455168-1aac22112489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZSUyMGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D0"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Automation
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Video Automation is the emerging field in Video Editing. It help the user to make video in less time as compared to make video at normal way. 
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
            src="https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Youtube Video Editing
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Youtube is the 2nd largest search engine in Internet World.Youtube video Editing is done by various tools available in market to reduce the cost, time and increase the quality of video.
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
            src="https://images.unsplash.com/photo-1653043967362-12162e8b946d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRvYmUlMjBwcmVtaWVyZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Adobe Premiere Pro
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Adobe Premier Pro is first release in 2003. Now it is one of the mostly used Video Editing Software. It helps in making a high Quality video.
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
            src="https://images.unsplash.com/photo-1628494391268-c9935bc384d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYmVhZnRlcmVmZmVjdHN8ZW58MHx8MHx8fDA%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Adobe After Effects
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Adobe After Effect is the tool which is used in production of Films, Video Games, television production. Now it is one of the mostly used Video Editing Software for 3D animation and motion Graphics.            </p>
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
            src="https://plus.unsplash.com/premium_photo-1698401032273-7bc8a755abe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbW9yYXxlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Filmora 13
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Filmora 13 release in October-2023 which is used in Video Effects, animation , transition and voice/music adjusting.
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
            src="https://images.unsplash.com/photo-1543336472-fcf478c443db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYWwlMjBjdXQlMjBwcm98ZW58MHx8MHx8fDA%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Final Cut Pro
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Final Cut Pro is the video Editing tool designed by Apple. It is good for Beginners and Professional to make 2D and 3D videos in high quality.
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
  </div>  )
}

export default CardsVideo