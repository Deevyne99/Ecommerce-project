import { useState, useEffect } from 'react'
// import { singleProduct } from '../data'
import Footer from '../Components/Footer'
import { MdKeyboardBackspace } from 'react-icons/md'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { formatPrice } from '../utils'
import { HashLoader } from 'react-spinners'
import { addItemToCart } from '../features/cart/cartslice'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { product, loadingSingleProducts } = useAppSelector(
    (state) => state.productSlice
  )
  const [imgUrl, setImgUrl] = useState(product.image)
  const [amount, setAmount] = useState(1)
  const dispatch = useAppDispatch()
  const cartItem = {
    name: product.name,
    image: product.image,
    price: product.price,
    amount,
    product: product.id,
  }
  // console.log(cartItem)

  const addtocart = () => {
    dispatch(addItemToCart({ product: cartItem }))
    console.log(cartItem)
  }
  const handleQuantity = (action: string) => {
    if (action === 'increase') {
      setAmount((amount) => (amount += 1))
      return
    }
    if (action === 'decrease') {
      if (amount === 1) {
        return
      }
      setAmount((amount) => (amount -= 1))
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (loadingSingleProducts) {
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
    <div className='mt-24'>
      <div className='flex flex-col mx-4 md:mx-12'>
        <button className='flex hover:bg-[#f3f4f6] w-[40px] h-[40px] justify-center items-center rounded-full'>
          <Link
            to={'/products'}
            className='flex text-[#6b7280] items-center text-2xl gap-2'
          >
            <MdKeyboardBackspace />
          </Link>
        </button>
        <div className='flex gap-8 md:flex-row w-full flex-col mt-8'>
          <div className='items-start justify-center flex flex-col w-full sm:flex-row gap-4'>
            <aside className='flex flex-row  flex-wrap sm:flex-col gap-4 sm:order-1 order-2 justify-center'>
              {product.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-[100px] h-[100px] hover:cursor-pointer'
                    onMouseEnter={() => {
                      setImgUrl(item || imgUrl)
                    }}
                    onMouseLeave={() => {
                      setImgUrl(product.image)
                    }}
                  >
                    <img
                      src={item || imgUrl}
                      alt=''
                      className='object-cover h-full w-full rounded-md'
                    />
                  </div>
                )
              })}
            </aside>
            <div className='h-[250px] flex sm:h-[450px] w-full justify-center items-center order-1 md:order-2 relative'>
              <img
                src={imgUrl || product.image}
                alt=''
                className='h-full w-full  object-center object-cover '
              />
            </div>
          </div>
          <article className='w-full flex flex-col gap-4'>
            <h3 className='text-xl font-bold'>{product.name}</h3>
            <p className='text-[#6b7280] text-[15px] leading-8'>
              {product.description}
            </p>
            <p className='text-lg text-[#3b82f6] font-bold'>
              {formatPrice(product.price)}
            </p>
            <div className='mt-6 flex gap-2'>
              <button
                onClick={() => handleQuantity('increase')}
                className='bg-slate-200 w-[30px] h-[30px] flex justify-center items-center p-1 font-semibold text-xl text-[#6b7280]'
              >
                +
              </button>
              <p className='flex justify-center items-center text-lg text-[#6b7280]'>
                {amount}
              </p>
              <button
                onClick={() => handleQuantity('decrease')}
                className='bg-slate-200 w-[30px] h-[30px] flex justify-center items-center p-1 text-xl font-semibold text-[#6b7280]'
              >
                -
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='text-[#6b7280] capitalize'>colors</h4>
              <div className='flex gap-4'>
                {product?.colors.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-[${item}] h-[30px] w-[30px] rounded-[50%]`}
                    ></div>
                  )
                })}
              </div>
            </div>
            <button
              onClick={() => addtocart()}
              className='capitalize mt-4 p-2 bg-[#3b82f6] text-[#fff] w-[150px]'
            >
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
