import { useState, ChangeEvent, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { loginUser } from '../features/user/userSlice'
import { toast } from 'react-toastify'

const Login = () => {
  const dispatch = useAppDispatch()
  const { userProfile, isLoading } = useAppSelector((state) => state.userSlice)
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      toast.error('user login')
      return
    }
    dispatch(loginUser(user))
    // toast.success('user logged in')
  }
  if (userProfile.user) {
    navigate('/')
  }
  return (
    <div>
      <div className='flex flex-col mx-4 md:mx-12 mt-12'>
        <Link to={'/'} className='text-2xl'>
          Divine store
        </Link>
        <div className='flex gap-4 flex-col justify-center items-center '>
          <h3 className='text-xl '>
            Let's get started, Please enter your details
          </h3>
        </div>
        <form
          className='flex flex-col justify-center items-center mt-8 gap-6'
          onSubmit={handleSubmit}
        >
          <div className='max-w-[400px] flex flex-col gap-1 w-full'>
            <p className='capitalize text-[#6b7280] '>Email</p>
            <input
              type='email'
              name='email'
              id=''
              className='border rounded-md p-2  w-full'
              value={user.email}
              onChange={(e) => handleInputValue(e)}
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
              onChange={(e) => handleInputValue(e)}
            />
          </div>
          <button
            type='submit'
            className='max-w-[400px] p-2 text-white w-full mt-6 bg-[#3b82f6]'
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <div className='flex flex-col text-center mt-4'>
          <p className=''>
            forgot your password reset it here{' '}
            <Link to='/forgotPassword'>Here</Link>{' '}
          </p>
        </div>
        <div className='flex flex-col text-center mt-4'>
          <p className=''>
            Register
            <Link to='/register'> Here</Link>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
