import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsProps } from '../../interfaces/interface'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils'

const initialState: ProductsProps = {
  products: [],
  error: false,
  loadingAllProducts: false,
  loadingSingleProducts: false,
  product: {
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
    images: [],
    category: '',
    colors: [''],
    freeShipping: false,
    inventory: 0,
    averageRating: 0,
    numOfReviews: 0,
    user: '',
  },
}
const page = 5

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    try {
      const { data } = await customFetch.get(`/ecommerce/products?page=${page}`)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async ({ productId }: { productId: string }) => {
    try {
      const { data } = await customFetch.get(`/ecommerce/products/${productId}`)
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
      state.loadingAllProducts = true
      state.error = false
    })
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.error = false
      state.loadingAllProducts = false
      state.products = payload.products
    })
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.error = true

      toast.error(`${payload}`)
      state.loadingAllProducts = false
    })
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loadingSingleProducts = true
      state.error = false
      state.product = initialState.product
    })
    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.error = false
      state.loadingSingleProducts = false
      state.product = payload.product

      //state.products = payload.products
    })
    builder.addCase(getSingleProduct.rejected, (state, { payload }) => {
      state.error = true
      toast.error(`${payload}`)
      state.loadingSingleProducts = false
    })
  },
  reducers: {},
})

export default productSlice.reducer
