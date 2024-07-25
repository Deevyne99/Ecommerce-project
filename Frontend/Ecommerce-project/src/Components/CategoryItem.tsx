// CategoryItem.js

// import React from 'react'
import image from '../assets/sale-8.jpg'
// import { products } from '../data'

const CategoryItem = () => {
  return (
    <div className='w-[200px] h-[310px] flex-shrink-0'>
      <div className='w-[200px] h-[280px]'>
        <img src={image} alt='' className='h-full w-full object-cover' />
      </div>
      <div className='mt-1'>
        <h1>hdbjhvbd sjhbjhbnsj</h1>
      </div>
    </div>
  )
}

export default CategoryItem
