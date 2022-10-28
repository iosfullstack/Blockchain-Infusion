import React from 'react'
import './Hero.css'
import Marquee from 'react-fast-marquee'
import HeroImage from '../Images/image 23.png'
import BM from '../Images/BM-BLACKYELLOW.png'
import Logo1 from '../Images/image 1.png'
import Bloc from '../Images/BlocVerse Logo 1.png'
import Logo2 from '../Images/image 2.png'
import Crypto1 from '../Images/Crypthority.png'
import Crypto2 from '../Images/The Crypto Community Logo dark.png'

const Hero = () => {
  return (
    <div>
        <section>
            <div className="hero flex flex-col md:flex-row space-y-0 px-6 mx-auto justify-between items-center">
                <div className="hero-text">
                    <h3 className="font-bold text-5xl"><span className="inline text-green-600">Metaverse </span>Technology for Billion of <span className="inline text-purple-500">Users</span></h3>
                    <p className='font-normal mt-2 text-xl w-3/4'>Buy and sell your NFTs on the largest metaverse exchange</p>
                    <div className="hero-btn mt-10 flex">
                        <button className='login1 rounded-tl-2xl mr-8 rounded-br-2xl'>Create Account</button>
                        <button className='login2 rounded-tl-2xl rounded-br-2xl'>Login</button>
                    </div>
                </div>

                <div className="hero-img">
                    <img src={HeroImage} alt="hero-img" />
                </div>
            </div>
            <div className="company-logo mt-16 flex items-center justify-center">
            <Marquee>
                <img className='mr-12' src={BM} alt="bm" />
                <img className='mr-12' src={Logo1} alt="logo1" />
                <img className='mr-12' src={Bloc} alt="bloc" />
                <img className='mr-12' src={Logo2} alt="logo2" />
                <img className='mr-12' src={Crypto1} alt="crypto1" />
                <img className='mr-12' src={Crypto2} alt="crypto2" />
            </Marquee>
            </div>
        </section>
    </div>
  )
}

export default Hero