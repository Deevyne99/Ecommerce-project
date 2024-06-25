// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='bg-white flex flex-col fixed w-full top-0 left-0 shadow-sm'>
        <div className='flex flex-col mx-4 md:mx-8 py-4'>
          <div className='flex justify-between '>
            <div className=''>
              <h1>Logo</h1>
            </div>
            <nav>
              <ul className='flex gap-4 items-center '>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/about'}>about</Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
