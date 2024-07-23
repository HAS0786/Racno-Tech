import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="bg-gray-900 text-white min-h-[100vh]">
  <div className="mx-auto max-w-screen-xl px-4 ">
    {children}


    </div>
    </div>

  )
}

export default Layout