import { useEffect, useState } from 'react'
import Categories from '../Components/Categories'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getAllProducts } from '../features/products/Products'

import { HashLoader } from 'react-spinners'
import { customFetch } from '../utils'
// import React from 'react'

const Home = () => {
  const dispatch = useAppDispatch()
  const { loadingAllProducts, products } = useAppSelector(
    (state) => state.productSlice
  )
  const [page, setPage] = useState(4)
  const [categoryPage, setCategoryPage] = useState(3)
  const [features, setfeatures] = useState([])
  const [categories, setCategories] = useState([])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    dispatch(getAllProducts({ page: pageNum }))
  }, [])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await customFetch(`/ecommerce/products?page=${page}`)
        console.log(data.products)
        setfeatures(data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [page])

  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        const { data } = await customFetch(
          `/ecommerce/products?page=${categoryPage}`
        )
        console.log(data.products)
        setCategories(data.products)
      } catch (error) {
        console.log(error)
      }
    }
    getCategoryProducts()
  }, [categoryPage])

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
        <Features products={products} />
      </div>
      <div>
        <Categories products={categories} />
      </div>
      <div className='my-20'>
        <Features products={features} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
