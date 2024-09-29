import { useAppSelector } from '../hooks/hooks'
import CardItem from './CardItem'

// import React from 'react'

const Features = () => {
  const { products } = useAppSelector((state) => state.productSlice)
  return (
    <main className='flex flex-col mx-4 md:mx-12 justify-center '>
      <h3 className='text-xl text-bold '>Featured Product</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  mt-6  lg:flex-row  items-start   gap-6 md:gap-12  justify-center'>
        {products.map((item) => {
          // const {img,desc,price} = item
          return <CardItem item={item} key={item.id} />
        })}

        {/* <CardItem /> */}
      </div>
    </main>
  )
}

export default Features
