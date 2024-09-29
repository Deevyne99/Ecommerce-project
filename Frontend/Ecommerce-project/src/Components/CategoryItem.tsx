import { Link } from 'react-router-dom'
import { ProductProps } from '../interfaces/interface'

// interface CategoryItem {
//   id: number
//   title: string
//   img: string
//   blurhash: string // Add the blurhash property
// }

const CategoryItem = ({ item }: { item: ProductProps }) => {
  // const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='w-[200px] h-[320px] flex-shrink-0'>
      <Link to={'/products'} className='w-[200px] h-[280px]'>
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
