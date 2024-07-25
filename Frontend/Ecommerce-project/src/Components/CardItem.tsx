// import React from 'react'
import image from '../assets/sale-10.jpg'
interface CardItem {
  name: string
  amount: number
  desc: string
  img: string
}

const CardItem = () => {
  return (
    <div className='flex flex-col h-[270px] w-full md:w-[200px]'>
      <div className='h-[250px] w-full md:w-[200px]'>
        <img
          src={image}
          alt=''
          className='w-full h-[210px] object-cover object-center'
        />
      </div>
      <div className='flex flex-col '>
        <div className='flex justify-between mt-2'>
          <h5>Green Kneat shirt</h5>
          <h5>$20</h5>
        </div>
        <p className='text-[14px]'>short description of item</p>
      </div>
    </div>
  )
}

export default CardItem
