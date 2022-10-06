import React, { useState} from 'react'

import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md"

import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
 

const  Navlinks = () => {

    const [logStatus, setLogStatus] = useState(true)
    const [hamburgerOpen, setHamburgerOpen] = useState(false); 

    const toggleHamburgeMenu = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className='basis-3/4 sm:basis-1/4 lg:pr-10 '>
            {/*<button className='lg:hidden p-2 ' onClick={toggleHamburgeMenu}>
                {hamburgerOpen ? 
                    <MdClose className='h-10 w-10'/>: 
                    <MdMenu className='h-10 w-10'/>
                }

            </button>
            */}

            <nav>
                {/*   <ul className={`nav-links flex-col ${hamburgerOpen ? "" : "hidden "} lg:flex lg:flex-row `}> */}
                <ul className={`nav-links flex justify-end`}>
                    <li>
                        <Link to='/'>
                            <AiOutlineHome className='h-7 w-7'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/:userId/new'>
                            <AiOutlinePlusCircle className='h-7 w-7'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/:userId'>
                            <CgProfile className='h-7 w-7'/>
                        </Link>
                    </li>
                </ul> 
            </nav>
        </div>
    )
}

export default Navlinks