import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { FiX } from 'react-icons/fi'

interface SideBarProps {
  openSideBar: boolean
  handleOpenSideBar: () => void
}

const SideBar: React.FC<SideBarProps> = ({
  openSideBar,
  handleOpenSideBar,
}) => {
  // const [openSideBar, setSideBar] = useState(true)
  return (
    <Modal openModal={openSideBar}>
      <aside
        className={` transition-transform ease-out duration-300 fixed top-0 right-0 z-50 p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll ${
          openSideBar ? '    translate-x-0 ' : 'translate-x-full '
        }`}
      >
        <button onClick={() => handleOpenSideBar()}>
          <FiX />
        </button>
        <nav>
          <ul className='flex flex-col gap-4 items-left '>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>about</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'orders'}>orders</Link>
          </ul>
        </nav>
        <nav className='flex gap-4 flex-col'>
          <Link to={'/sign-in'}>sign in</Link>
          <Link to={'/sign-out'}>sign out</Link>
        </nav>
      </aside>
    </Modal>
  )
}

export default SideBar
