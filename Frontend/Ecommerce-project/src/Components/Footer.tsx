// import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='py-12 text-white bg-[#3b82f6] flex flex-col'>
      <div className=' justify-between  gap-8 flex flex-wrap mx-4 md:mx-12'>
        <div className='gap-4 flex flex-col '>
          <h4 className='text-2xl capitalize'>Logo</h4>
          <div className='flex flex-col gap-4 mt-4'>
            <p className='max-w-[400px] text-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda unde optio et numquam magnam!
            </p>
            <p className='text-sm'>kaludivine@gmail.com</p>
            <p className='text-sm'>+2348148158802</p>
            <div className='flex gap-2'>
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
              <FaInstagramSquare />
            </div>
          </div>
        </div>
        <div>
          <h4 className='text-2xl'>Logo</h4>
          <ul className='flex flex-col gap-4 mt-4'>
            <Link to={'/'} className='capitalize text-sm'>
              Home
            </Link>
            <Link to={'/about'} className='capitalize text-sm'>
              About
            </Link>
            <Link to={'/products'} className='capitalize text-sm'>
              Products
            </Link>
            <Link to={'/orders'} className='capitalize text-sm'>
              Orders
            </Link>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl'>Logo</h4>
          <ul className='flex flex-col gap-4 mt-4'>
            <Link to={'/'} className='capitalize text-sm'>
              Home
            </Link>
            <Link to={'/about'} className='capitalize text-sm'>
              About
            </Link>
            <Link to={'/products'} className='capitalize text-sm'>
              Products
            </Link>
            <Link to={'/orders'} className='capitalize text-sm'>
              Orders
            </Link>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl'>Logo</h4>
          <ul className='flex flex-col gap-4 mt-4'>
            <Link to={'/'} className='capitalize text-sm'>
              Home
            </Link>
            <Link to={'/about'} className='capitalize text-sm'>
              About
            </Link>
            <Link to={'/products'} className='capitalize text-sm'>
              Products
            </Link>
            <Link to={'/orders'} className='capitalize text-sm'>
              Orders
            </Link>
          </ul>
        </div>
        <div className='gap-4 flex flex-col '>
          <h4 className='text-2xl'>Subscribe</h4>
          <div className='flex flex-col gap-4 mt-4'>
            <p className='max-w-[400px] text-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda unde optio et numquam magnam!
            </p>
            <div>
              <input type='text' className='p-2' />
              <button className='border bg-[#3b82f6] p-2 border-white'>
                Enter
              </button>
            </div>
            <p className='text-sm'>kaludivine@gmail.com</p>
            <p className='text-sm'>+2348148158802</p>
            <div className='flex gap-2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
