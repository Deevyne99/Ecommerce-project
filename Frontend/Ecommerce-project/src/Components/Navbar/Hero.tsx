import { useState, useEffect } from 'react'
import { products } from '../../data'

const Hero = () => {
  const [items, setItems] = useState(products)
  const [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const lastIndex = items.length - 1
    if (productIndex < 0) {
      setProductIndex(lastIndex)
    }
    if (productIndex > lastIndex) {
      setProductIndex(0)
    }
  }, [productIndex, items])

  useEffect(() => {
    const slider = setInterval(() => {
      setProductIndex(productIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [productIndex])

  return (
    <section className='md:mt-12 mt-4 h-[500px] md:h-screen relative w-full flex flex-col overflow-hidden'>
      <div className='flex justify-center items-center gap-8 relative w-full h-full'>
        {items.map((item, index: number) => {
          const { id, title, img, desc } = item
          let position = 'translate-x-full opacity-0'

          if (productIndex === index) {
            position = 'translate-x-0 opacity-100'
          } else if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === items.length - 1)
          ) {
            position = '-translate-x-full opacity-100'
          }

          return (
            <div
              key={id}
              className={`absolute lg:px-16 md:px-8 px-4  top-0 left-0 w-full h-[450px] flex flex-col  md:flex-row items-center justify-between md:gap-12 gap-4 transition-transform duration-300 ${position}`}
            >
              <img
                src={img}
                alt={title}
                className='h-full w-full  md:w-1/2 object-cover '
              />
              <div className='flex flex-col gap-2 w-full md:w-1/2 max-w-[600px]'>
                <h2 className='font-bold text-2xl text-[#000]  md:text-left text-center '>
                  {title}
                </h2>
                <p className='md:w-[80%] w-full md:text-left text-center'>
                  {desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
