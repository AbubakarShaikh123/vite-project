import React from 'react'

function Navbar() {
  return (
    <div className='h-[80px] w-[100%]  text-black flex items-center justify-between px-[40px] border-b-[1px] border-b-black'>
           <div className='text-3xl'>LOGO</div>
           <div>
            <ul className='flex items-center gap-5 text-xl'>
                <li>Sign up</li>
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
           </div>
    </div>
  )
}

export default Navbar