import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { BlurhashCanvas } from 'react-blurhash'
import { formatPrice } from '../utils'
import { ProductProps } from '../interfaces/interface'
import { getSingleProduct } from '../features/products/Products'
import { useAppDispatch } from '../hooks/hooks'

const CardItem = ({ item }: { item: ProductProps }) => {
  const [imgUrl, setImgUrl] = useState(item.image)
  const dispatch = useAppDispatch()

  const productId = item.id
  return (
    <div
      onClick={() => dispatch(getSingleProduct({ productId }))}
      className='flex flex-col h-[300px] md:h-[250px] w-full md:w-[210px] '
    >
      <Link
        className='h-[260px] w-full md:w-[210px]'
        onMouseEnter={() => setImgUrl(item.images[0] || imgUrl)}
        onMouseLeave={() => setImgUrl(item.image)}
        to={`/product/${item.id}`}
      >
        <div className='relative w-full h-[250px] md:h-[220px]'>
          <img
            src={imgUrl}
            alt={item.name}
            className={`w-full h-[250px] md:h-[220px] object-cover object-center rounded-md transition-opacity duration-300 `}
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      </Link>
      <div className='flex flex-col'>
        <div className='flex justify-between  text-sm text-[#6b7280]'>
          <h5 className='capitalize w-[140px] truncate'>{item.name}</h5>
          <h5>{formatPrice(item.price)}</h5>
        </div>
        {/* <p className='text-sm text-[#6b7280]'>{item.description}</p> */}
      </div>
    </div>
  )
}

export default CardItem
