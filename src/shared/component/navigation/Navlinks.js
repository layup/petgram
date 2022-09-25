import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md"
 
function Navlinks() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false); 

    const toggleHamburgeMenu = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className=''>
            <button className='lg:hidden p-2 ' onClick={toggleHamburgeMenu}>
                {hamburgerOpen ? 
                    <MdClose className='h-10 w-10'/>: 
                    <MdMenu className='h-10 w-10'/>
                }

            </button>
            <ul className={`nav-links flex-col ${hamburgerOpen ? "" : "hidden "} lg:flex lg:flex-row`}>
                <li>
                    Home
                </li>

                <li>
                    Profile
                </li>

                <li>
                    Sign In 
                </li>

                <li>
                    Logout
                </li>
            
            </ul>
        </div>
    )
}

export default Navlinks