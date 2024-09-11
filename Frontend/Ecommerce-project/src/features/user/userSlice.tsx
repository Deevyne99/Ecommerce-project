import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IntialStateProps, LoginUserProps } from '../../interfaces/interface'
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

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: LoginUserProps, thunkAPI) => {
    try {
      const response = await customFetch.post('/ecommerce/auth/login', user)
      console.log(response)
      return response
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
