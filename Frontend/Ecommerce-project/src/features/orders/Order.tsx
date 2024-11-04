import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch, customFetchOrder } from '../../utils'

interface SingleOrderProps {
  name: string
  price: number
  amount: number
  image: string
  _id?: string
}
interface orderProps {
  orderItems: SingleOrderProps[]
  total: number
  shippingFee: number
  clientSecret: string
  user: string
  loading: boolean
  error: string
}
const defaultState: orderProps = {
  orderItems: [],
  total: 0,
  shippingFee: 0,
  clientSecret: '',
  user: '',
  loading: false,
  error: '',
}

export const createOrder = createAsyncThunk(
  'orders/createOrders',
  async ({
    shipping,
    cartItems,
  }: {
    shipping: number
    cartItems: SingleOrderProps[]
  }) => {
    try {
      const { data } = await customFetchOrder.post(
        '/ecommerce/orders',

        {
          shipping,
          cartItems,
        }
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

export const getUserOrders = createAsyncThunk(
  'orders/getCurrentUserOrders',
  async () => {
    try {
      const { data } = await customFetch.get('/ecommerce/orders')
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const orderSlice = createSlice({
  name: 'OrderSlice',
  initialState: defaultState,
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true
    })
    builder.addCase(createOrder.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(createOrder.rejected, (state) => {
      state.loading = false
      state.error = 'Error'
    })
    builder.addCase(getUserOrders.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getUserOrders.fulfilled, (state) => {
      state.loading = false
      state.error = ''
    })
    builder.addCase(getUserOrders.rejected, (state) => {
      state.loading = false
      state.error = 'error'
    })
  },
  reducers: {},
})

export default orderSlice.reducer
