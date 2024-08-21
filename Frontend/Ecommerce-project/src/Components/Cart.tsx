import Modal from './Modal'
import sale from '../assets/sale-8.jpg'
import { RiDeleteBin6Fill } from 'react-icons/ri'
// import React from 'react'

const Cart = () => {
  return (
    <Modal openModal={true}>
      <div className='flex flex-col right-0 left-0 mx-auto w-[90%] rounded-md bg-white p-4 fixed gap-4 max-w-[400px] md:mx-0 md:left-auto  md:right-8 top-16'>
        <div className='flex flex-col text-[#6b7280] font-bold'>
          <p>Products in your cart</p>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px]'>
            <img
              src={sale}
              alt=''
              className='w-full h-full justify-center items-center object-cover object-center'
            />
          </div>
          <article className='w-[80%] md:max-w-[350px] flex flex-col gap-1  text-[#6b7280]'>
            <p>white t shirt</p>

            <p className='text-[#3b82f6] font-bold text-sm'>1 x $329</p>
          </article>
          <button className='flex'>
            <RiDeleteBin6Fill className='text-xl text-red-500' />
          </button>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px]'>
            <img
              src={sale}
              alt=''
              className='w-full h-full justify-center items-center object-cover object-center'
            />
          </div>
          <article className='w-[80%] md:max-w-[350px] flex flex-col gap-1  text-[#6b7280]'>
            <p>white t shirt</p>

            <p className='text-[#3b82f6] font-bold text-sm'>1 x $329</p>
          </article>
          <button className='flex'>
            <RiDeleteBin6Fill className='text-xl text-red-500' />
          </button>
        </div>
        <div className='flex gap-2 items-center justify-between'>
          <div className='w-[60px] h-[60px] md:w-[90px] md:h-[90px]'>
            <img
              src={sale}
              alt=''
              className='w-full h-full justify-center items-center object-cover object-center'
            />
          </div>
          <article className='w-[80%] md:max-w-[350px] flex flex-col gap-1  text-[#6b7280]'>
            <p>white t shirt</p>

            <p className='text-[#3b82f6] font-bold text-sm'>1 x $329</p>
          </article>
          <button className='flex'>
            <RiDeleteBin6Fill className='text-xl text-red-500' />
          </button>
        </div>

        <div className='flex justify-between text-[#6b7280] font-bold'>
          <p className='capitalize '>subtotal</p>
          <p>$329</p>
        </div>
        <button className='p-2 bg-[#3b82f6] text-[#fff]'>
          Proceed to checkout
        </button>
      </div>
    </Modal>
  )
}

export default Cart
