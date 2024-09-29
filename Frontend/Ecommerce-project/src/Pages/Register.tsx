import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../hooks/hooks'
import { RegisterUser } from '../features/user/userSlice'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const dispatch = useAppDispatch()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user.name || !user.email || !user.password) {
      toast.error('Please fill all inputs')
      return
    }
    dispatch(RegisterUser(user))
    toast.success('data sent successfully')
  }
  return (
    <div className='flex flex-col mx-4 md:mx-12 mt-12'>
      <Link to={'/'} className='text-2xl'>
        Divine store
      </Link>
      <div className='flex gap-4 flex-col justify-center items-center mt-12'>
        <h3 className='text-xl '>
          Let's get started, Please enter your details
        </h3>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 w-full justify-center items-center'
        >
          <div className='max-w-[400px] flex flex-col gap-1 w-full'>
            <p className='capitalize text-[#6b7280] '>name</p>
            <input
              type='text'
              name='name'
              id=''
              className='border rounded-md p-2  w-full'
              value={user.name}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className='max-w-[400px] flex flex-col gap-1 w-full'>
            <p className='capitalize text-[#6b7280] '>Email</p>
            <input
              type='email'
              name='email'
              id=''
              className='border rounded-md p-2  w-full'
              value={user.email}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className='max-w-[400px] flex flex-col gap-1 w-full'>
            <p className='capitalize text-[#6b7280] '>password</p>
            <input
              type='password'
              name='password'
              id=''
              className='border rounded-md p-2  w-full'
              value={user.password}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <button
            type='submit'
            className='max-w-[400px] p-2 text-white w-full mt-6 bg-[#3b82f6]'
          >
            Register
          </button>
        </form>
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
