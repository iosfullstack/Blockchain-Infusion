import React from 'react'
import { Data } from '../DB/Projectdb'
import  Time  from '../Images/Vector (3).png'
import  Eth  from '../Images/Ethereum-Logo.wine.png'
import './Project.css'

const Project = () => {
  return (
    <section>
        <h2 className='my-7 flex justify-center p-text'>Trending Projects</h2>
    
    <div className='project-card flex flex-wrap justify-center gap-7'>
        
        {Data.map((item) => {
            return(
                <div className="card module-border-wrap" key={item.id}>
                    <div className='flex flex-col px-4 pt-3'>
                    <img src={item.image} alt="avatar" />
                    <div className="profile flex flex-row justify-between mt-3">
                        <p>{item.name} {item.number}</p>
                        <div className="amount flex flex-row">
                        <img src={Eth} alt="eth" />
                        <p>{item.amount}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 mt-5'>
                    <img src={Time} alt="time" /><span>{item.time}</span>
                    </div>
                    <button className='buy m-auto rounded-full mt-6'>Buy Now</button>
                    </div>
                </div>
            )
        })}

    </div>
    </section>
  )
}

export default Project