import { useState, useEffect } from 'react'
import { products } from '../data'
import { Link } from 'react-router-dom'
import { Blurhash } from 'react-blurhash'

const Hero = () => {
  const [productIndex, setProductIndex] = useState(0)
  const [loaded, setLoaded] = useState(Array(products.length).fill(false))

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

  const handleImageLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded]
      newLoaded[index] = true
      return newLoaded
    })
  }

  return (
    <section className='md:mt-12 mt-4 h-[550px] md:h-screen relative w-full flex flex-col overflow-hidden'>
      <div className='flex justify-center items-center gap-8 relative w-full h-full'>
        {products.map((item, index) => {
          const { id, title, img, desc, blurhash } = item
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
              className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-between md:gap-12 gap-4 transition-transform duration-300 ${position}`}
            >
              <div className='md:w-1/2 w-full h-full'>
                {!loaded[index] && (
                  <Blurhash
                    hash={blurhash}
                    width='100%'
                    height='100%'
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    className='object-cover h-full w-full'
                  />
                )}
                <img
                  src={img}
                  alt={title}
                  onLoad={() => handleImageLoad(index)}
                  style={{ display: loaded[index] ? 'block' : 'none' }}
                  className='object-cover h-[300px] md:h-full w-full'
                />
              </div>
              <div className='flex flex-col items-center justify-center gap-2 w-full md:w-1/2 max-w-[600px]'>
                <h2 className='font-bold text-2xl text-[#1c0f0f] md:text-left text-center'>
                  {title}
                </h2>
                <p className='md:w-[80%] w-full text-center text-[#6b7280] md:text-[15px] text-sm px-4 md:px-0 leading-8'>
                  {desc}
                </p>
                <Link
                  to={`/product/${id}`}
                  className='capitalize text-center mt-2 p-2 bg-[#3b82f6] text-[#fff] w-[100px]'
                >
                  shop
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
