// CategoryItem.js

import { Link } from 'react-router-dom'

// import image from '../assets/sale-8.jpg'
// import { products } from '../data'
interface CategoryItem {
  id: number
  title: string

  img: string
}

const CategoryItem = ({ item: { title, img } }: { item: CategoryItem }) => {
  return (
    <div className='w-[200px] h-[320px] flex-shrink-0 '>
      <Link to={'/products'} className='w-[200px] h-[280px]'>
        <img src={img} alt='' className='h-full w-full object-cover ' />
      </Link>
      <div className='mt-1'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default CategoryItem
