import Modal from './Modal'

import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiX } from 'react-icons/fi'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { handleShowCart } from '../features/modals/modalSlice'
import { Link, useNavigate } from 'react-router-dom'
import { formatPrice } from '../utils'
import { toast } from 'react-toastify'
import { removeItem } from '../features/cart/cartslice'

// import React from 'react'

const Cart = () => {
  const { showCart } = useAppSelector((store) => store.modalSlice)
  const { cartItems, cartTotal } = useAppSelector((store) => store.cartSlice)
  const { userProfile } = useAppSelector((store) => store.userSlice)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const handleCheckout = () => {
    if (userProfile.user) {
      dispatch(handleShowCart())
      navigate('/checkout')
      return
    }
    dispatch(handleShowCart())
    navigate('/login')
    toast.error('Please login')
    return
  }
  return (
    <Modal openModal={showCart}>
      <div className=' flex flex-col right-0 left-0 mx-auto w-[90%] rounded-md bg-white p-3 fixed gap-4 max-w-[400px] md:mx-0 md:left-auto  md:right-8 top-16 '>
        <button
          onClick={() => dispatch(handleShowCart())}
          className='fixed right-4 ml-auto left-0  md:right-[500px] h-[30px] w-[30px] items-center flex justify-center top-[20px] md:top-[40px] bg-white rounded-[50%]'
        >
          <FiX />
        </button>
        {cartItems?.length > 0 && (
          <div className='flex flex-col gap-4 px-2 max-h-[500px] overflow-y-scroll'>
            <div className='flex flex-col text-[#6b7280] font-bold'>
              <p>Products in your cart</p>
            </div>
            {cartItems.map((item) => {
              const { name, product, price, amount, image } = item
              return (
                <div
                  key={product}
                  className='flex gap-2 items-center justify-between'
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

            <div className='flex justify-between text-[#6b7280] font-bold'>
              <p className='capitalize '>subtotal</p>
              <p>{formatPrice(cartTotal)}</p>
            </div>
            <div
              onClick={() => handleCheckout()}
              className='p-2 bg-[#3b82f6] text-[#fff] text-center'
            >
              Proceed to checkout
            </div>
          </div>
        )}
        {cartItems?.length === 0 && (
          <div className='flex flex-col gap-4'>
            <p className='text-[#6b7280] text-center'>
              Your cart is empty please click on the link below to shop
            </p>

            <Link
              onClick={() => dispatch(handleShowCart())}
              to='/products'
              className='p-2 w-[100px] flex mx-auto justify-center items-center bg-[#3b82f6] text-[#fff] text-center'
            >
              Shop
            </Link>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default Cart
