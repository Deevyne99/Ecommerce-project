// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { singleProduct } from '../data'

const SingleProduct = () => {
  // const { id } = useParams()
  // const { img, images, title, amount, id, desc } = singleProduct
  const [imgUrl, setImgUrl] = useState(singleProduct.img)
  return (
    <div className=' mt-20'>
      <div className='flex flex-col mx-4 md:mx-12'>
        <div className='flex'>
          <div className='flex gap-4'>
            <aside className='flex flex-col gap-4'>
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
            <div className='h-[450px] w-[450px]'>
              <img
                src={imgUrl}
                alt=''
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
