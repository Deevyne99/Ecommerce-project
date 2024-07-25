import Categories from '../Components/Categories'
import Features from '../Components/Features'
import Hero from '../Components/Hero'

// import React from 'react'

const Home = () => {
  return (
    <div className=' h-screen '>
      <div>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Features />
      </div>
    </div>
  )
}

export default Home
