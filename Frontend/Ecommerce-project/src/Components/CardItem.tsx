import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface CardItemProps {
  item: {
    id: number
    title: string
    desc: string
    img: string
    amount: number
    images: string[]
  }
}

const CardItem = ({
  item: { title, amount, desc, img, images, id },
}: CardItemProps) => {
  const [imgUrl, setImgUrl] = useState(img)

  return (
    <div className='flex flex-col h-[300px] md:h-[280px] w-full md:w-[210px] '>
      <Link
        className='h-[250px] w-full md:w-[210px]'
        onMouseEnter={() => setImgUrl(images[0])}
        onMouseLeave={() => setImgUrl(img)}
        to={`/product/${id}`}
      >
        <img
          src={imgUrl}
          alt=''
          className='w-full h-[250px] md:h-[220px] object-cover object-center rounded-md hover:cursor-pointer'
        />
      </Link>
      <div className='flex flex-col'>
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
