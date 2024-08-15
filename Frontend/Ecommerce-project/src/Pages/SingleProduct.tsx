import { useState, useEffect } from 'react'
import { singleProduct } from '../data'
import Footer from '../Components/Footer'
import { Blurhash } from 'react-blurhash'

const SingleProduct = () => {
  const [imgUrl, setImgUrl] = useState(singleProduct.img)
  const [isLoading, setIsLoading] = useState(true)
  const [colors, setColors] = useState(['red', 'black', 'blue', 'orange'])

  useEffect(() => {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => setIsLoading(false)
  }, [imgUrl])

  return (
    <div className='mt-24'>
      <div className='flex flex-col mx-4 md:mx-12'>
        <div className='flex w-full gap-8 md:flex-row flex-col'>
          <div className='flex flex-col w-full sm:flex-row gap-4'>
            <aside className='flex flex-row flex-wrap sm:flex-col gap-4 sm:order-1 order-2 justify-center'>
              {singleProduct.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-[100px] h-[100px] hover:cursor-pointer'
                    onMouseEnter={() => {
                      setIsLoading(true)
                      setImgUrl(item)
                    }}
                    onMouseLeave={() => {
                      setIsLoading(true)
                      setImgUrl(singleProduct.img)
                    }}
                  >
                    <img
                      src={item}
                      alt=''
                      className='object-cover h-full w-full rounded-md'
                    />
                  </div>
                )
              })}
            </aside>
            <div className='h-[250px] sm:h-[450px] w-full order-1 md:order-2 relative'>
              {isLoading && (
                <Blurhash
                  hash={singleProduct.blurhash} // Add the corresponding blurhash here
                  width={'100%'}
                  height={'100%'}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-md'
                />
              )}
              <img
                src={imgUrl}
                alt=''
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full object-cover object-center rounded-md ${
                  isLoading ? 'hidden' : 'block'
                }`}
              />
            </div>
          </div>
          <article className='w-full flex flex-col gap-4'>
            <h3 className='text-xl font-bold'>{singleProduct.title}</h3>
            <p className='text-[#6b7280] text-[15px] leading-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nobis sint, numquam sed aperiam dolores pariatur nisi unde
              adipisci ipsam neque magni minus officiis! Velit fugiat libero
              iusto maxime voluptate!
            </p>
            <p className='text-lg text-[#3b82f6] font-bold'>$120</p>
            <div className='mt-6 flex gap-2'>
              <button className='bg-slate-200 w-[30px] h-[30px] flex justify-center items-center p-1'>
                +
              </button>
              <p className='flex justify-center items-center'>1</p>
              <button className='bg-slate-200 w-[30px] h-[30px] flex justify-center items-center p-1'>
                -
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-[#6b7280] capitalize'>colors</h4>
              <div className='flex gap-4'>
                {colors.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        item === 'red'
                          ? 'bg-[#ff0000]'
                          : item === 'orange'
                          ? 'bg-[#ffa500]'
                          : item === 'blue'
                          ? 'bg-[#3b82f6]'
                          : 'bg-[#000]'
                      } h-[30px] w-[30px] rounded-[50%]`}
                    ></div>
                  )
                })}
              </div>
            </div>
            <button className='capitalize mt-4 p-2 bg-[#3b82f6] text-[#fff] w-[150px]'>
              Add to cart
            </button>
          </article>
        </div>
      </div>
      <div className='mt-12'>
        <Footer />
      </div>
    </div>
  )
}

export default SingleProduct
