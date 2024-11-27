import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'

// import React from 'react'

const Error = () => {
  return (
    <>
      <Link
        to={'/'}
        className='flex text-[#6b7280] items-center mt-8 mx-4 md:mx-16 text-2xl gap-2'
      >
        <MdKeyboardBackspace />
      </Link>
      <div className='flex flex-col mx-4 md:mx-12 gap-6 justify-center items-center mt-32'>
        <h2 className='text-4xl font-bold text-[#6b7280]'>404</h2>
        <h2 className='text-2xl text-[#6b7280]'>Page Not Found</h2>
      </div>
    </>
  )
}

export default Error
