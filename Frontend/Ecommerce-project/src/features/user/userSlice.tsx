import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  IntialStateProps,
  LoginUserProps,
  RegisterUserProps,
} from '../../interfaces/interface'
import { customFetch } from '../../utils'

const userProfile = {
  email: '',
  name: '',
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
      const response = await customFetch.post('/ecommerce/auth/login', user)
      console.log(response)
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
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true
    })
  },
  reducers: {},
})

export default userSlice.reducer
