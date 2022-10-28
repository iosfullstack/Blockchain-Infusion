import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <section>
        <div className="subscribe mx-auto w-3/4 md:m-auto">

        <div className="subscribes flex flex-col justify-center items-center">
            <h4>NewsLetter</h4>
            <p>Stay tuned to our updates and special offers</p>
            <form className='form' action="" method="post">
                <input className='subscribe-input' type="email" name="" id="" placeholder='Enter your Email' />
                <button className='subscribe-btn'>Subscribe</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Subscribe