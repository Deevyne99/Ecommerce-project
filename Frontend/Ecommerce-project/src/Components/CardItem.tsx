// import React from 'react'
// import image from '../assets/sale-10.jpg'
interface CardItem {
  id: number
  title: string
  desc: string
  img: string
  amount: number
}

const CardItem = ({
  item: { title, amount, desc, img },
}: {
  item: CardItem
}) => {
  return (
    <div className='flex flex-col h-[300px] md:h-[280px] w-full md:w-[210px] '>
      <div className='h-[250px] w-full md:w-[210px] '>
        <img
          src={img}
          alt=''
          className='w-full h-[250px] md:h-[220px] object-cover object-center'
        />
      </div>
      <div className='flex flex-col '>
        <div className='flex justify-between mt-1'>
          <h5>{title}</h5>
          <h5>${amount}</h5>
        </div>
        <p className='text-[14px]'>{desc}</p>
      </div>
    </div>
  )
}

export default CardItem
