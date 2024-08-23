// import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { FiX } from 'react-icons/fi'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import {
  handleShowCart,
  handleShowSideBar,
} from '../features/modals/modalSlice'
import { TiShoppingCart } from 'react-icons/ti'

const SideBar = () => {
  const { showSidebar } = useAppSelector((store) => store.modalSlice)
  const dispatch = useAppDispatch()
  // const [openSideBar, setSideBar] = useState(true)
  return (
    <Modal openModal={showSidebar}>
      <aside
        className={` transition-transform ease-out duration-300 fixed top-0 right-0 z-50 p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll ${
          showSidebar ? '    translate-x-0 ' : 'translate-x-full '
        }`}
      >
        <button onClick={() => dispatch(handleShowSideBar())}>
          <FiX />
        </button>
        <nav>
          <ul className='flex flex-col gap-4 items-left '>
            <Link onClick={() => dispatch(handleShowSideBar())} to={'/'}>
              Home
            </Link>
            <Link onClick={() => dispatch(handleShowSideBar())} to={'/about'}>
              about
            </Link>
            <Link
              onClick={() => dispatch(handleShowSideBar())}
              to={'/products'}
            >
              Products
            </Link>
            <Link onClick={() => dispatch(handleShowSideBar())} to={'orders'}>
              orders
            </Link>
          </ul>
        </nav>
        <nav className='flex gap-4 mt-4 flex-col'>
          <div className=''>
            <button
              className='relative flex gap-1'
              onClick={() => dispatch(handleShowCart())}
            >
              Cart
              <div className='absolute top-[-18px] left-[50px] h-[25px] w-[25px] flex justify-center items-center text-sm rounded-[50%] text-white bg-[#3b82f6]'>
                1
              </div>
              <TiShoppingCart className='text-2xl' />
            </button>
          </div>
          <Link onClick={() => dispatch(handleShowSideBar())} to={'/login'}>
            sign in
          </Link>
          <Link onClick={() => dispatch(handleShowSideBar())} to={'/register'}>
            sign out
          </Link>
        </nav>
      </aside>
    </Modal>
  )
}

export default SideBar
