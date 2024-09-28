import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsProps } from '../../interfaces/interface'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils'

const initialState: ProductsProps = {
  products: [],
  error: false,
  loading: false,
}

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    try {
      const { data } = await customFetch.get('/ecommerce/products')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.error = false
      state.loading = false
      state.products = payload.products
    })
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.error = true

      toast.error(`${payload}`)
      state.loading = false
    })
  },
  reducers: {},
})

export default productSlice.reducer
