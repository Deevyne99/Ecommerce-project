import Categories from '../Components/Categories'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'

// import React from 'react'

const Home = () => {
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
