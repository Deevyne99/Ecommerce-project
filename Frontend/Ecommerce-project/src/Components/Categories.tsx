import { products } from '../data'
import CategoryItem from './CategoryItem'
products
// import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-col py-16'>
      <div className='flex '>
        <div className='  overflow-x-auto overflow-y-hidden no-scrollbar'>
          <div className='flex gap-4'>
            {products.map((item, index) => {
              return <CategoryItem key={index} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
