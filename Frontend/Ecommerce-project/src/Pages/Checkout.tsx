import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { formatPrice } from '../utils'
import { removeItem } from '../features/cart/cartslice'

// import React from 'react'

const Checkout = () => {
  const { cartItems, cartTotal, shipping, tax } = useAppSelector(
    (state) => state.cartSlice
  )
  const dispatch = useAppDispatch()
  return (
    <section className='mt-20 flex flex-col mx-4 md:mx-16  items-center '>
      <div className='flex justify-between  w-full'>
        <div className='flex flex-col w-[50%] gap-6  py-8 px-4'>
          <h2 className='capitalize text-2xl'>your order</h2>
          <div className='flex flex-col gap-8 border rounded-md p-4'>
            {cartItems.map((item) => {
              const { product, image, name, amount, price } = item
              return (
                <div
                  key={product}
                  className='flex gap-2 border p-4 rounded-md items-center justify-between'
                >
                  <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px]'>
                    <img
                      src={image}
                      alt=''
                      className='w-full h-full justify-center items-center object-cover object-center'
                    />
                  </div>
                  <article className='w-[80%] md:max-w-[350px] flex flex-col gap-1  text-[#6b7280]'>
                    <p>{name}</p>

                    <p className='text-[#3b82f6] font-bold text-sm'>
                      {amount} x {formatPrice(price)}
                    </p>
                  </article>
                  <button
                    onClick={() => dispatch(removeItem({ product, amount }))}
                    className='flex'
                  >
                    <RiDeleteBin6Fill className='text-xl text-red-500' />
                  </button>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col border p-4 rounded-md'>
            <h2>Order Summary</h2>
            <div className='flex flex-col'>
              <div className='flex justify-between mt-4'>
                <p className='capitalize text-sm'>subtotal</p>
                <p className=' text-sm'>{formatPrice(cartTotal)}</p>
              </div>
              <div className='flex justify-between mt-4'>
                <p className='capitalize text-sm'>shipping</p>
                <p className=' text-sm'>{formatPrice(shipping)}</p>
              </div>
              <div className='flex justify-between mt-4'>
                <p className='capitalize text-sm'>tax</p>
                <p className=' text-sm'>{formatPrice(tax)}</p>
              </div>
              <div className='flex justify-between mt-4'>
                <p className='capitalize text-sm'>total</p>
                <p className=' text-sm'>
                  {formatPrice(cartTotal + shipping + tax)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  w-[50%]'></div>
      </div>
    </section>
  )
}

export default Checkout
