import React from 'react'

import NavSearch from './NavSearch'
import Navlinks from './Navlinks'

function MainNavBar() {
  
  return (
    <div className='mt-0 fixed w-full z-10 top-0 bg-white drop-shadow-sm shadow-sm lg:flex justify-center bg-light-blue-100'> 
      <div className='w-full flex j lg:w-4/5 xl:w-3/5 '>
        <h1 className='font-bold text-gray-700  basis-1/4 grid content-center text-center p-2'>PetGram</h1>
        <NavSearch />
        <Navlinks />  
      </div>
    </div>
  )
}

export default MainNavBar