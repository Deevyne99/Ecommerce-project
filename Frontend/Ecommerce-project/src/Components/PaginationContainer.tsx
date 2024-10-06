// import React from 'react'
// import { useState } from 'react'
import {
  getAllProducts,
  handleActivePagination,
  resetProducts,
} from '../features/products/Products'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

const PaginationContainer = () => {
  const { pagesCount, active } = useAppSelector((state) => state.productSlice)
  //  const [active, setActive] = useState(1)
  const dispatch = useAppDispatch()
  const numPages = Array.from({ length: pagesCount }, (_, index) => {
    return index + 1
  })
  // if (pagesCount < 2) return null
  const handleDataFetch = (num: number) => {
    // setActive(num)
    dispatch(handleActivePagination(num))
    dispatch(resetProducts())
    dispatch(getAllProducts({ page: num }))
    window.scrollTo(0, 0)
  }
  // console.log(active)

  return (
    <div className='flex justify-between ml-auto max-w-[600px]   mt-4'>
      {/* <button>prev</button> */}

      <div className='flex gap-4 flex-wrap '>
        {numPages.map((item) => {
          return (
            <div key={item}>
              <button
                onClick={() => handleDataFetch(item)}
                className={`bg-[#3b82f6] w-[40px] h-[40px] p-2 shadow-md text-[#fff] rounded-md ${
                  active === item ? 'bg-white   text-[#000]' : ''
                }`}
              >
                {item}
              </button>
            </div>
          )
        })}
      </div>
      {/* <button>next</button> */}
    </div>
  )
}

export default PaginationContainer
