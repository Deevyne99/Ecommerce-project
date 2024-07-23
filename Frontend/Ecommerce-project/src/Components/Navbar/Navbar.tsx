// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='bg-white shadow-md flex flex-col fixed w-full top-0 left-0 z-30   '>
          <div className='flex flex-col mx-4 md:mx-8 py-4'>
            <div className='flex justify-between '>
              <div className=''>
                <h1>Logo</h1>
              </div>
              <nav>
                <ul className='md:flex gap-4 items-center hidden'>
                  <Link to={'/'}>Home</Link>
                  <Link to={'/about'}>about</Link>
                  <Link to={'/products'}>Products</Link>
                  <Link to={'orders'}>orders</Link>
                </ul>
              </nav>
              <nav className='md:flex gap-4 hidden'>
                <Link to={'/sign-in'}>sign in</Link>
                <Link to={'/sign-out'}>sign out</Link>
              </nav>
              <button className='flex md:hidden'>
                <FaBars className='text-lg' />
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
