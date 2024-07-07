import React from 'react'
import landing from './assets/landing.png'

function Hero() {
  return (
    <div className='w-[100%] py-[60px] bg-white flex flex-col items-center justify-center gap-1 text-center'>
        <img src={landing} alt="Landing Img" className=' w-[40%] h-[auto] mt-10' />
        <h2 className='text-[40px] mt-7'>Invest in everything</h2>
        <p className='text-xl mt-2'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='bg-sky-600 px-8 py-2 text-xl text-white mt-5 rounded hover:bg-black active:bg-white active:text-black'>Sign up now</button>
        
    </div>
  )
}

export default Hero