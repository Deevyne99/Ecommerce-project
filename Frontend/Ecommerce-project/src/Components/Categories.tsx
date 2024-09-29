import { useAppSelector } from '../hooks/hooks'
import CategoryItem from './CategoryItem'

// import React from 'react'

const Categories = () => {
  const { products } = useAppSelector((state) => state.productSlice)
  return (
    <div className='flex flex-col '>
      <div className='flex mx-4 md:mx-12'>
        <h3 className='text-xl text-bold '>Categories</h3>
      </div>
      <div className='flex mt-4'>
        <div className='  overflow-x-auto overflow-y-hidden no-scrollbar'>
          <div className='flex gap-4'>
            {products.map((item, index) => {
              return <CategoryItem item={item} key={index} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
