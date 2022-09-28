import React, { useState} from 'react'

import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md"
 

const  Navlinks = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false); 

    const toggleHamburgeMenu = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className=' bg-orange-200 lg:w-2/6'>
            <button className='lg:hidden p-2 ' onClick={toggleHamburgeMenu}>
                {hamburgerOpen ? 
                    <MdClose className='h-10 w-10'/>: 
                    <MdMenu className='h-10 w-10'/>
                }

            </button>

            <nav>
                <ul className={`nav-links flex-col ${hamburgerOpen ? "" : "hidden "} lg:flex lg:flex-row `}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/:profileId'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/settings'>Settings</Link> 
                    </li>
                    <li>
                        Sign In 
                    </li>
                    <li>
                        Logout
                    </li>
                </ul> 
            
            </nav>
        </div>
    )
}

export default Navlinks