// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { singleProduct } from '../data'
import Footer from '../Components/Footer'

const SingleProduct = () => {
  // const { id } = useParams()
  // const { img, images, title, amount, id, desc } = singleProduct
  const [imgUrl, setImgUrl] = useState(singleProduct.img)
  return (
    <div className=' mt-20'>
      <div className='flex flex-col mx-4 md:mx-12'>
        <div className='flex w-full'>
          <div className='flex flex-col w-full sm:flex-row gap-4'>
            <aside className='flex flex-row flex-wrap sm:flex-nowrap  sm:flex-col gap-4 sm:order-1 order-2'>
              {singleProduct.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-[100px] h-[100px] hover:cursor-pointer'
                    onMouseEnter={() => setImgUrl(item)}
                    onMouseLeave={() => setImgUrl(singleProduct.img)}
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
            <div className='h-[250px] sm:h-[450px] w-full md:max-w-[450px] order-1 md:order-2'>
              <img
                src={imgUrl}
                alt=''
                className='w-full h-full object-cover object-center rounded-md'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <Footer />
      </div>
    </div>
  )
}

export default SingleProduct
