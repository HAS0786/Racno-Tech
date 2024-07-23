import React from 'react'
import { Link } from 'react-router-dom'

const HeaderYoutube = () => {
  return (
    <>
    <section class="bg-center bg-no-repeat bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1683842640591-210c38313e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D')] bg-gray-700 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Youtube Animation
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at <b className="font-extrabold text-lg">Racno Tech</b> focus
          on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            to={"/"}
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  </>
  )
}

export default HeaderYoutube