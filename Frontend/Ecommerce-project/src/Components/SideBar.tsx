// import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { FiX } from 'react-icons/fi'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import {
  handleCloseSideBar,
  handleShowCart,
  handleShowSideBar,
} from '../features/modals/modalSlice'
import { TiShoppingCart } from 'react-icons/ti'
import { useEffect, useRef } from 'react'

const SideBar = () => {
  const { showSidebar } = useAppSelector((store) => store.modalSlice)
  const { numOfItemsInCart } = useAppSelector((store) => store.cartSlice)
  const sideBarRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target as Node)
      ) {
        dispatch(handleCloseSideBar())
      }
    }

    // Attach event listener when modal is open
    if (showSidebar) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [showSidebar, dispatch])
  // const [openSideBar, setSideBar] = useState(true)
  return (
    <Modal openModal={showSidebar}>
      <aside
        ref={sideBarRef}
        className={` transition-transform ease-out duration-300 fixed top-0 right-0 z-50 p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll ${
          showSidebar ? '    translate-x-0 ' : 'translate-x-full '
        }`}
      >
        <button onClick={() => dispatch(handleShowSideBar())}>
          <FiX />
        </button>
        <nav>
          <ul className='flex flex-col gap-4 items-left capitalize text-[#1c0f0f]'>
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
        <nav className='flex gap-4 mt-4 flex-col text-[#1c0f0f]'>
          <div className=''>
            <button
              className='relative flex gap-1'
              onClick={() => dispatch(handleShowCart())}
            >
              Cart
              {numOfItemsInCart > 0 && (
                <div className='absolute top-[-18px] left-[50px] h-[25px] w-[25px] flex justify-center items-center text-sm rounded-[50%] text-white bg-[#3b82f6]'>
                  {numOfItemsInCart}
                </div>
              )}
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
