import { Link, Outlet } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import SideBar from '../SideBar'
import { TiShoppingCart } from 'react-icons/ti'
import Cart from '../Cart'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
  handleShowSideBar,
  handleShowCart,
} from '../../features/modals/modalSlice'
import { logoutUser } from '../../features/user/userSlice'

// import { TiShoppingCart } from 'react-icons/ti'
handleShowSideBar

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { showCart } = useAppSelector((store) => store.modalSlice)
  const { userProfile } = useAppSelector((store) => store.userSlice)

  return (
    <div>
      <div className='flex flex-col'>
        <div className='bg-white shadow-md flex flex-col fixed w-full top-0 left-0  z-20 '>
          <div className='flex flex-col mx-4 md:mx-8 py-4'>
            <div className='flex justify-between mt-1'>
              <div className=''>
                <h1>Logo</h1>
              </div>
              <nav>
                <ul className='md:flex gap-4 items-center hidden'>
                  <Link to={'/'}>Home</Link>
                  <Link to={'/about'}>about</Link>
                  <Link to={'/products'}>Products</Link>
                  <Link to={'orders'}>orders</Link>
                </ul>
              </nav>
              <nav className='md:flex gap-8 hidden items-center justify-center'>
                <div className=''>
                  <button
                    className='relative'
                    onClick={() => dispatch(handleShowCart())}
                  >
                    <div className='absolute top-[-18px] left-[18px] h-[25px] w-[25px] flex justify-center items-center text-sm rounded-[50%] text-white bg-[#3b82f6]'>
                      1
                    </div>
                    <TiShoppingCart className='text-2xl' />
                  </button>
                </div>
                {userProfile.user ? (
                  <button onClick={() => dispatch(logoutUser())}>Logout</button>
                ) : (
                  <div className='flex gap-6'>
                    <Link to={'/register'}>register</Link>

                    <Link to={'/login'}>login</Link>
                  </div>
                )}
              </nav>
              <button
                className='flex md:hidden'
                onClick={() => dispatch(handleShowSideBar())}
              >
                <FaBars className='text-lg' />
              </button>
            </div>
          </div>
        </div>
        <div>
          <SideBar />
        </div>
        {showCart && (
          <div>
            <Cart />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
