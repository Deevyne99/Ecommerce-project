import CardItem from './CardItem'

// import React from 'react'

const Features = () => {
  return (
    <main className='flex flex-col mx-4 md:mx-12 my-20'>
      <h3 className='text-xl text-bold px-4'>Featured Product</h3>
      <div className='flex md:flex-cols-2 mt-6 flex-wrap lg:flex-row  items-center justify-center gap-6 md:gap-12  '>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </main>
  )
}

export default Features
