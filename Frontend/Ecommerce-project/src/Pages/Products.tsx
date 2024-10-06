import CardItem from '../Components/CardItem'
import { useEffect } from 'react'
import Footer from '../Components/Footer'
import { useAppSelector } from '../hooks/hooks'
import PaginationContainer from '../Components/PaginationContainer'
import { HashLoader } from 'react-spinners'
// import { getAllProducts } from '../features/products/Products'

// import { data } from '../data'

// import React from 'react'

const Products = () => {
  const { products, loadingAllProducts } = useAppSelector(
    (state) => state.productSlice
  )
  // const dispatch = useAppDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // useEffect(() => {
  //   dispatch(getAllProducts({ page: 0 }))
  // }, [dispatch, products])
  if (loadingAllProducts) {
    return (
      <div className='flex  justify-center mx-auto items-center h-screen'>
        <HashLoader
          color='#3b82f6'
          className='justify-center items-center mx-auto'
        />
      </div>
    )
  }

  return (
    <div className='h-screen my-24 flex-col flex '>
      <div className='flex flex-col mx-4 md:mx-12 '>
        <div className='flex gap-4'>
          {/* <div className=''>
          <h1>Sidebar</h1>
        </div> */}
          {/* <div>
          <Features />
        </div> */}
          <aside className='gap-4  px-2 flex-col md:w-[180px] lg:w-[200px] hidden md:flex'>
            <h3>Product Categories</h3>
            <div className='flex gap-3 items-center'>
              <input type='checkbox' name='Pending' id='' />
              <label
                className='text-sm text-[#6b7280] capitalize'
                htmlFor='Pending'
              >
                Pending
              </label>
            </div>
            <div className='flex gap-3 items-center'>
              <input type='checkbox' name='Pending' id='' />
              <label
                className='text-sm text-[#6b7280] capitalize'
                htmlFor='Pending'
              >
                Pending
              </label>
            </div>
            <div className='flex gap-3 items-center'>
              <input type='checkbox' name='Pending' id='' />
              <label
                className='text-sm text-[#6b7280] capitalize'
                htmlFor='Pending'
              >
                Pending
              </label>
            </div>
            <div className='flex gap-3 items-center'>
              <input type='checkbox' name='Pending' id='' />
              <label
                className='text-sm text-[#6b7280] capitalize'
                htmlFor='Pending'
              >
                Pending
              </label>
            </div>
            <div className='flex gap-3 items-center'>
              <input type='checkbox' name='Pending' id='' />
              <label
                className='text-sm text-[#6b7280] capitalize'
                htmlFor='Pending'
              >
                Pending
              </label>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                Salary
              </h3>
              <input
                type='range'
                name='salary'
                id='salary'
                min={100}
                max={2000}
                className='border-none w-[120px]'
              />
              <p className='text-sm font-normal text-[#6b7280]'>$3,000</p>
            </div>
          </aside>
          <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 '>
            {products.map((product, index) => {
              return <CardItem item={product} key={index} />
            })}
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
