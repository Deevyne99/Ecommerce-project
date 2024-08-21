import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BlurhashCanvas } from 'react-blurhash'

interface CategoryItem {
  id: number
  title: string
  img: string
  blurhash: string // Add the blurhash property
}

const CategoryItem = ({
  item: { title, img, blurhash },
}: {
  item: CategoryItem
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='w-[200px] h-[320px] flex-shrink-0'>
      <Link to={'/products'} className='w-[200px] h-[280px]'>
        <div className='relative w-full h-full'>
          {!isLoaded && (
            <BlurhashCanvas
              hash={blurhash}
              className='absolute inset-0 w-full h-full object-cover'
              punch={1}
            />
          )}
          <img
            src={img}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </Link>
      <div className='mt-1'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default CategoryItem
