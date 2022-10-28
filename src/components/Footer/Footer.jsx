import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Brand from '../Images/Blockchain Infusion LOGO 1.png'
import Twitter from '../Images/Vector (9).png'
import Tiktok from '../Images/Vector (10).png'
import Linkdln from '../Images/Vector (11).png'
import Insta from '../Images/Vector (12).png'
import Discord from '../Images/Vector (13).png'

const Footer = () => {
  return (
    <div>
        <footer className="footer h-32 flex w-full pt-4 flex-col md:flex-row space-y-0 px-6 mx-auto justify-around items-center mt-52">
        <div className="footer-logo">
            <Link to='/'><img src={Brand} alt="nft" /></Link>
        </div>
            <div className="footer-link flex gap-5 pt-4 pb-4 md:gap-5">
                <Link>Collection</Link>
                <Link>Explore</Link>
                <Link>Artists</Link>
            </div>
            <div className="footer-social w-80 md:h-16 bg-gray-900 flex flex-row justify-center items-center gap-4">
                <a href="http://"><img src={Twitter} alt="twitter" /></a>
                <a href="http://"><img src={Tiktok} alt="tiktok" /></a>
                <a href="http://"><img src={Linkdln} alt="linkdln" /></a>
                <a href="http://"><img src={Insta} alt="instagram" /></a>
                <a href="http://"><img src={Discord} alt="discord" /></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer