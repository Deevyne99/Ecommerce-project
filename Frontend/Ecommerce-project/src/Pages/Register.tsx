import { Link } from 'react-router-dom'

// import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-12 mt-12'>
      <h2 className='text-2xl'>Divine store</h2>
      <div className='flex gap-4 flex-col justify-center items-center mt-12'>
        <h3 className='text-xl '>
          Let's get started, Please enter your details
        </h3>
        <div className='max-w-[400px] flex flex-col gap-1 w-full'>
          <p className='capitalize text-[#6b7280] '>name</p>
          <input
            type='text'
            name=''
            id=''
            className='border rounded-md p-2  w-full'
          />
        </div>
        <div className='max-w-[400px] flex flex-col gap-1 w-full'>
          <p className='capitalize text-[#6b7280] '>Email</p>
          <input
            type='email'
            name=''
            id=''
            className='border rounded-md p-2  w-full'
          />
        </div>
        <div className='max-w-[400px] flex flex-col gap-1 w-full'>
          <p className='capitalize text-[#6b7280] '>password</p>
          <input
            type='email'
            name=''
            id=''
            className='border rounded-md p-2  w-full'
          />
        </div>
        <button className='max-w-[400px] p-2 text-white w-full mt-6 bg-[#3b82f6]'>
          Register
        </button>
      </div>
      <div className='flex flex-col text-center mt-4'>
        <p className=''>
          Already have an account? login <Link to='/login'>Here</Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default Register
