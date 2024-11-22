import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from '../../utils'
// import { toast } from 'react-toastify'

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
  clientSecret?: string
  user: string
  loading: boolean
  error: string
  userId: string
}
const defaultState: orderProps = {
  orderItems: [],
  total: 0,
  shippingFee: 0,
  clientSecret: '',
  user: '',
  loading: false,
  error: '',
  userId: '',
}

export const createOrder = createAsyncThunk(
  'orders/createOrders',
  async ({
    shipping,
    items,
    userId,
  }: {
    shipping: number
    items: SingleOrderProps[]
    userId: string
  }) => {
    try {
      const { data } = await customFetch.post(
        '/ecommerce/orders',
        {
          shipping,
          items,
          userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
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
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.loading = false
      state.orderItems = payload.order
      state.clientSecret = `${payload.clientSecret}`
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
