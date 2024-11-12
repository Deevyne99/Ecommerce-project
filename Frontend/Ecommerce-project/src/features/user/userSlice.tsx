import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  IntialStateProps,
  LoginUserProps,
  RegisterUserProps,
} from '../../interfaces/interface'
import { customFetch } from '../../utils'
import { toast, ToastContainer } from 'react-toastify'

const userProfile = {
  user: '',
  userId: '',
  role: '',
}
const initialState: IntialStateProps = {
  userProfile,
  isLoading: false,
  isError: false,
}

// eslint-disable-next-line react-refresh/only-export-components
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: LoginUserProps, thunkAPI) => {
    try {
      const response = await customFetch.post('/ecommerce/auth/login', user, {
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        withCredentials: true,
      })

      const setCookieHeader = response.headers['Set-Cookie']

      // You can now store the cookie or use it for subsequent requests
      console.log('Cookie received:', setCookieHeader)
      // console.log(data)
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const RegisterUser = createAsyncThunk(
  'user/registerUser',
  async (user: RegisterUserProps, thunkAPI) => {
    try {
      const response = await customFetch.post('/ecommerce/auth/register', user)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// eslint-disable-next-line react-refresh/only-export-components
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    const response = await customFetch.get('/ecommerce/auth/logout')
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
    //  return thunkAPI.rejectWithValue(error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { tokenUser } = payload
      console.log(payload.tokenUser)

      state.isLoading = false
      toast.success(`welcome ${tokenUser.user}`)
      state.userProfile = tokenUser
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true
    })
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false
      state.isError = false
      state.userProfile = {
        user: '',
        userId: '',
        role: '',
      }
      toast.success('Logged out successfully')
    })
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.isError = true
      state.isLoading = false
      toast.error(`${payload}`)
    })
  },
  reducers: {},
})

export default userSlice.reducer
