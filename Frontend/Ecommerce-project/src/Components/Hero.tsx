import { useState, useEffect } from 'react'
import { products } from '../data'

const Hero = () => {
  // const [items, setItems] = useState(products)
  const [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const lastIndex = products.length - 1
    if (productIndex < 0) {
      setProductIndex(lastIndex)
    }
    if (productIndex > lastIndex) {
      setProductIndex(0)
    }
  }, [productIndex])

  useEffect(() => {
    const slider = setInterval(() => {
      setProductIndex(productIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [productIndex])

  return (
    <section className='md:mt-12 mt-4 h-[500px] md:h-screen relative w-full flex flex-col overflow-hidden'>
      <div className='flex justify-center items-center gap-8 relative w-full h-full'>
        {products.map((item, index: number) => {
          const { id, title, img, desc } = item
          let position = 'translate-x-full opacity-0'

          if (productIndex === index) {
            position = 'translate-x-0 opacity-100'
          } else if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === products.length - 1)
          ) {
            position = '-translate-x-full opacity-100'
          }

          return (
            <div
              key={id}
              className={`absolute    top-0 left-0 w-full h-full flex flex-col  md:flex-row items-center justify-between md:gap-12 gap-4 transition-transform duration-300 ${position}`}
            >
              <img
                src={img}
                alt={title}
                className='md:h-full h-[300px] w-full  md:w-1/2 object-cover '
              />
              <div className='flex flex-col items-center justify-center gap-2 w-full md:w-1/2 max-w-[600px]'>
                <h2 className='font-bold text-2xl text-[#1c0f0f]  md:text-left text-center '>
                  {title}
                </h2>
                <p className='md:w-[80%] w-full text-center text-[#6b7280] text-[15px] px-4 md:px-0 leading-8'>
                  {desc}
                </p>
                <button className='capitalize mt-2 p-2 bg-[#3b82f6] text-[#fff] w-[100px]'>
                  shop
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
