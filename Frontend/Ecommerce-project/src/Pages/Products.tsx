import CardItem from '../Components/CardItem'
import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import PaginationContainer from '../Components/PaginationContainer'
import { HashLoader } from 'react-spinners'
import { getAllProducts, handleSearch } from '../features/products/Products'
import { IoMdSearch } from 'react-icons/io'
// import { formatPrice } from '../utils'

// import { getAllProducts } from '../features/products/Products'

// import { data } from '../data'

// import React from 'react'
type Category = 'Shirts' | 'Trousers' | 'Shoes' | 'Bags' | 'Jackets'
type Sort = 'oldest' | 'latest' | 'a-z' | 'z-a'
const Products = () => {
  const dispatch = useAppDispatch()

  // const [productsCategory,setProductCategory] = useState()
  // const [price, setPrice] = useState<number>(100)
  const { products, loadingAllProducts, category, active, search } =
    useAppSelector((state) => state.productSlice)
  const productCategory = ['shirts', 'trousers', 'shoes', 'bags', 'jackets']
  const productSort = ['latest', 'oldest', 'a-z', 'z-a']

  const [selectedCategories, setSelectedCategories] = useState<Category>()
  const [selectedSort, setSelectedSort] = useState<Sort>()
  // handle category

  const handleProductsCategory = (category: Category) => {
    setSelectedCategories(category)
    dispatch(getAllProducts({ category }))
  }

  const handleSelectedSort = (sort: Sort) => {
    setSelectedSort(sort)
    dispatch(getAllProducts({ sort: sort }))
  }

  // handle price Range

  // const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrice(Number(event.target.value)) // Update the state with the current slider value
  //   dispatch(getAllProducts({ price }))
  // }

  // const handleProductsCategory =()=>{}

  //handle search
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearch(e.target.value))
  }
  const handleFetchData = () => {
    dispatch(getAllProducts({ search }))
    // dispatch(resetHandleSearch())
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getAllProducts({ page: active, category }))
    }
  }, [dispatch, products, active, category])

  return (
    <div className='h-screen my-24 flex-col flex '>
      <div className='flex flex-col mx-4 md:mx-8 '>
        <div className='flex gap-4'>
          {/* <div className=''>
          <h1>Sidebar</h1>
        </div> */}
          {/* <div>
          <Features />
        </div> */}

          <aside className='gap-4   flex-col md:w-[140px] lg:w-[200px] hidden md:flex'>
            <h3>Categories</h3>

            {productCategory.map((item: string, index: number) => {
              return (
                <div key={index} className='flex gap-3 items-center'>
                  <input
                    className='hover:cursor-pointer'
                    onChange={() => handleProductsCategory(item as Category)}
                    type='checkbox'
                    name={item}
                    id=''
                    checked={selectedCategories === item}
                  />
                  <label
                    className='text-sm text-[#6b7280] capitalize'
                    htmlFor='Pending'
                  >
                    {item}
                  </label>
                </div>
              )
            })}
            <h3>Sort</h3>
            {productSort.map((item: string, index: number) => {
              return (
                <div key={index} className='flex gap-3 items-center'>
                  <input
                    className='hover:cursor-pointer'
                    onChange={() => handleSelectedSort(item as Sort)}
                    type='checkbox'
                    name={item}
                    id=''
                    checked={selectedSort === item}
                  />
                  <label
                    className='text-sm text-[#6b7280] capitalize'
                    htmlFor='Pending'
                  >
                    {item}
                  </label>
                </div>
              )
            })}
            {/* <div className='flex flex-col gap-2'>
              <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                Prices
              </h3>
              <input
                type='range'
                name='salary'
                id='salary'
                min={100}
                max={7000}
                onChange={handlePriceChange}
                value={price}
                className='border-none w-[120px]'
              />
              <p className='text-sm font-normal text-[#6b7280]'>
                {formatPrice(price)}
              </p>
            </div> */}
          </aside>
          <div className='flex w-full flex-col '>
            <div className='w-full md:w-[80%] flex '>
              <input
                type='text'
                className='border w-full p-2 rounded-r-none rounded-md focus:#3b82f6'
                placeholder='search'
                name='search'
                onChange={handleSearchInput}
                value={search}
              />
              <button
                onClick={() => handleFetchData()}
                className='flex justify-center items-center bg-[#3b82f6] text-white w-[50px] p-2 rounded-r-md'
              >
                <IoMdSearch className='text-xl' />
              </button>
            </div>
            {loadingAllProducts ? (
              <div className='flex  justify-center mx-auto items-center h-screen'>
                <HashLoader
                  color='#3b82f6'
                  className='justify-center items-center mx-auto'
                />
              </div>
            ) : (
              <div className='grid w-full sm:grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-12 '>
                {products.map((product, index) => {
                  return <CardItem item={product} key={index} />
                })}
              </div>
            )}
          </div>
        </div>
        <div className='mt-16'></div>
      </div>
      <div className='my-4 mx-4'>
        <PaginationContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Products
