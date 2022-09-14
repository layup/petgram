import React from 'react'

import NavSearch from './NavSearch'
import Navlinks from './Navlinks'

function MainNavBar() {
  return (
    <div className='mt-0 fixed w-full z-10 top-0 bg-gray-200 drop-shadow-sm lg:flex lg:justify-around'> 
      <h1 className='font-bold text-blue-300 hidden lg:content-center lg:justify-items-center  lg:grid lg:w-auto  '>PetGram</h1>
      <NavSearch />
      <Navlinks /> 
    </div>
  )
}

export default MainNavBar