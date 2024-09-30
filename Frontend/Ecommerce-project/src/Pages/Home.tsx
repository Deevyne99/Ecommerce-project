import { useEffect } from 'react'
import Categories from '../Components/Categories'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getAllProducts } from '../features/products/Products'
import Modal from '../Components/Modal'
import { HashLoader } from 'react-spinners'
// import React from 'react'

const Home = () => {
  const dispatch = useAppDispatch()
  const { loadingAllProducts } = useAppSelector((state) => state.productSlice)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

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
    <div className=' h-screen '>
      <div>
        <Hero />
      </div>
      <div className='my-20'>
        <Features />
      </div>
      <div>
        <Categories />
      </div>
      <div className='my-20'>
        <Features />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
