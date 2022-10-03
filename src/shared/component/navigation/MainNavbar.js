import React from 'react'

import NavSearch from './NavSearch'
import Navlinks from './Navlinks'

function MainNavBar() {
  
  return (
    <div className='mt-0 fixed w-full z-10 top-0 bg-white drop-shadow-sm lg:flex justify-center '> 
      <div className='w-full lg:flex lg:justify-between lg:w-3/4'>
        <h1 className='font-bold text-blue-500 hidden lg:content-center w-2/6 bg-red-100 lg:justify-items-center lg:grid lg:w-auto '>PetGram</h1>
        <NavSearch />
        <Navlinks />  
      </div>
    </div>
  )
}

export default MainNavBar