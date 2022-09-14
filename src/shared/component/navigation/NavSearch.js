import React from 'react'

import { MdSearch } from "react-icons/md";

function NavSearch() {
  return (
    <div className='content-center hidden lg:grid'>
        <div className='flex'>
            <input className="h-8 p-1 px-4 text-sm rounded-l-full border-t-2 border-b-2 border-l-2 border-blue-300 lg:w-70 xl:w-96" placeholder="Search"/> 
            <MdSearch className='pr-3 pl-1 rounded-r-full bg-blue-100 h-8 w-12 border-2 border-blue-300'/>
        </div>
    </div>
  )
}

export default NavSearch