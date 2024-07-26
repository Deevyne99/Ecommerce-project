import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  openModal: boolean
}
const Modal: React.FC<ModalProps> = ({ openModal, children }) => {
  return (
    <div
      className={`${
        openModal
          ? 'flex  fixed h-full z-40 w-full bg-[#000] bg-opacity-5 backdrop-blur-sm'
          : null
      }`}
    >
      {children}
    </div>
  )
}

export default Modal
