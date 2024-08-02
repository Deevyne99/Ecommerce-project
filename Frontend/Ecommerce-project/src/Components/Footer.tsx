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
    <section className='py-12 bg-[#c7d2fe] flex flex-col'>
      <div className=' justify-between  gap-8 flex flex-wrap mx-4 md:mx-12'>
        <div className='gap-4 flex flex-col '>
          <h4 className='text-2xl'>Logo</h4>
          <div className='flex flex-col gap-4 mt-4'>
            <p className='max-w-[400px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda unde optio et numquam magnam!
            </p>
            <p>kaludivine@gmail.com</p>
            <p>+2348148158802</p>
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
            <Link to={'/'} className='capitalize '>
              Home
            </Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl'>Logo</h4>
          <ul className='flex flex-col gap-4 mt-4'>
            <Link to={'/'} className='capitalize '>
              Home
            </Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl'>Logo</h4>
          <ul className='flex flex-col gap-4 mt-4'>
            <Link to={'/'} className='capitalize '>
              Home
            </Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
          </ul>
        </div>
        <div className='gap-4 flex flex-col '>
          <h4 className='text-2xl'>Subscribe</h4>
          <div className='flex flex-col gap-4 mt-4'>
            <p className='max-w-[400px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda unde optio et numquam magnam!
            </p>
            <div>
              <input type='text' className='p-2' />
              <button className='bg-[#7dd3fc] p-2'>Enter</button>
            </div>
            <p>kaludivine@gmail.com</p>
            <p>+2348148158802</p>
            <div className='flex gap-2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
