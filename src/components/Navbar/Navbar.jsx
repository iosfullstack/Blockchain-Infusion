import React from 'react'
import './Navbar.css'
import '../../js/script'
import Brand from '../Images/Blockchain Infusion LOGO 1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='relative container mx-auto p-6'>
            <div className="flex items-center justify-between">
                <div className="brand-logo pt-2">
                    <Link><img src={Brand} alt="nft" /></Link>
                </div>
                <div className="hidden space-x-6 md:flex">
                    
                    <Link>MarketPlace</Link>
                    <Link>Community</Link>
                    <Link>News</Link>
                    <Link>Creator</Link>
                    <Link>Features</Link>
                </div>
                <div className="login-btn hidden p-3 px-6 pt-2 md:block">
                    <button className='login1 rounded-tl-2xl rounded-br-2xl'>Login</button>
                </div>

                <button id='menu-btn' className='block hamburger md:hidden focus:outline-none'>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className="absolute flex-col items-center self-end 
                hidden py-8 mt-10 space-y-6 font-bold bg-green-800 sm:w-auto 
                sm:self-center left-6 right-6 drop-shadow-md">
                    <Link>MarketPlace</Link>
                    <Link>Community</Link>
                    <Link>News</Link>
                    <Link>Creator</Link>
                    <Link>Features</Link>
                </div>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar