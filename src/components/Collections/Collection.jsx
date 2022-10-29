import React from 'react'
import './Collections.css'

const Collection = () => {
  return (
    <section>
        <h2 className='my-7 flex flex-col justify-center items-center c-text'>Create and Sell your <span>NFTs</span></h2>
        <div className="collection flex flex-col md:flex-row space-y-0 px-6 mx-auto justify-center gap-28 items-center">
            <div className="set flex flex-col items-center">
                  <p className='num1'>01</p>
                  <h5 className='set-text'>Set up your wallet</h5>
            </div>
            <div className="create">
              <div className='mx-7'>
              <div className="num2">02</div>
              <h4>Create your Collection</h4>
              <p className='create-txt'>Click <span className="inline text-green-600">My Collections</span> and set up your collection. Add social links, description, 
                profile and banner images and set a secondary sales fee </p>
              </div>
            </div>
            <div className="add flex flex-col items-center">
            <p className='num1'>03</p>
              <h5 className='add-text'>Add your NFTs</h5>
            </div>
            <div className="list flex flex-col items-center">
            <p className='num1'>04</p>
              <h5 className='list-text'>List them for sale</h5>
            </div>
        </div>
    </section>
  )
}

export default Collection