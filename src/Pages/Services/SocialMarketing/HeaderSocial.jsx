import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSocial = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1656164630621-8974e3a7e85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWElMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Social Media Management
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at <b className="font-extrabold text-lg">Racno Tech</b> focus
            on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderSocial;
