import { Link } from 'react-router-dom'
import { ProductProps } from '../interfaces/interface'

import { getAllProducts, resetProducts } from '../features/products/Products'
import { useAppDispatch } from '../hooks/hooks'

// interface CategoryItem {
//   id: number
//   title: string
//   img: string
//   blurhash: string // Add the blurhash property
// }

const CategoryItem = ({ item }: { item: ProductProps }) => {
  const dispatch = useAppDispatch()
  // const [sort, setSort] = useState('')
  // const [search, setsearch] = useState('')
  // const [category, setcategory] = useState(item.category)
  //  const [category, setcategory] = useState()
  const handleDataFetch = () => {
    dispatch(resetProducts())
    dispatch(getAllProducts({ category: `${item.category}` }))
  }

  return (
    <div className='w-[200px] h-[320px] flex-shrink-0'>
      <Link
        to={'/products'}
        className='w-[200px] h-[280px]'
        onClick={() => handleDataFetch()}
      >
        <div className='relative w-full h-full'>
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover transition-opacity duration-300 `}
          />
        </div>
      </Link>
      <div className='mt-1'>
        <h1>{item.name}</h1>
      </div>
    </div>
  )
}

export default CategoryItem
