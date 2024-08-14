import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BlurhashCanvas } from 'react-blurhash'

interface CardItemProps {
  item: {
    id: number
    title: string
    desc: string
    img: string
    amount: number
    images: string[]
    blurhash: string // Add the blurhash property
  }
}

const CardItem = ({
  item: { title, amount, desc, img, images, id, blurhash },
}: CardItemProps) => {
  const [imgUrl, setImgUrl] = useState(img)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='flex flex-col h-[300px] md:h-[280px] w-full md:w-[210px] '>
      <Link
        className='h-[250px] w-full md:w-[210px]'
        onMouseEnter={() => setImgUrl(images[0])}
        onMouseLeave={() => setImgUrl(img)}
        to={`/product/${id}`}
      >
        <div className='relative w-full h-[250px] md:h-[220px]'>
          {!isLoaded && (
            <BlurhashCanvas
              hash={blurhash}
              className='absolute inset-0 w-full h-full object-cover object-center rounded-md'
              punch={1}
            />
          )}
          <img
            src={imgUrl}
            alt={title}
            className={`w-full h-[250px] md:h-[220px] object-cover object-center rounded-md transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </Link>
      <div className='flex flex-col'>
        <div className='flex justify-between mt-1 text-sm text-[#6b7280]'>
          <h5>{title}</h5>
          <h5>${amount}</h5>
        </div>
        <p className='text-sm text-[#6b7280]'>{desc}</p>
      </div>
    </div>
  )
}

export default CardItem
