import React from 'react'

import { MdSearch } from "react-icons/md";

function NavSearch() {
  return (
    <div className=' hidden sm:flex sm:justify-center  sm:basis-2/4 sm:items-center'>
        <div className='flex w-4/5'>
            <input className=" p-1 px-4 text-sm rounded-l-full border-t-2 border-b-2 border-l-2 border-cyan-500 sm:w-full lg:w-70 xl:w-96 focus:outline-none text-gray-700 " placeholder="Search"/> 
            <MdSearch className='pr-3 pl-1 rounded-r-full bg-cyan-500 h-8 w-12 border-2 border-cyan-500 text-white' />
        </div>
    </div>
  )
}

export default NavSearch