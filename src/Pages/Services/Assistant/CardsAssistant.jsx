import React from 'react'
import { Link } from 'react-router-dom'

const CardsAssistant = () => {
  return (
    <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border-2 p-4 rounded border-gray-700">
        <article className="group">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlydHVhbCUyMGFzc2lzdGFudHxlbnwwfHwwfHx8MA%3D%3D"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4 ">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Virtual Assistant
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Virtual Assistant VA is the self-employed that provide services remotely from anywhere in the world. VA offers services to clients according to their tasks. In this different services are provided like making phone call, arrange the travel management or manage the Email account etc. We have a team of VA(Virtual Assistant) that provides you services according to your requirement remotely.
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
  
    </div>
  </div>
  )
}

export default CardsAssistant