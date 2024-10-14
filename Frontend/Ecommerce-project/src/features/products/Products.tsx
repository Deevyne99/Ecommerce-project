import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsProps } from '../../interfaces/interface'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils'

interface QueryParams {
  page?: number
  category?: string // or string[] if there are multiple categories
  sort?: string
}

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
  pagesCount: 0,
  active: 1,
  category: '',
}
// const page = 5

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: QueryParams) => {
    try {
      const queryString = new URLSearchParams(params as string).toString()
      const { data } = await customFetch.get(
        `/ecommerce/products?${queryString}`
      )
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
      state.pagesCount = payload.pages
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
  reducers: {
    resetProducts: (state) => {
      state.products = []
    },
    resetSingleProduct: (state) => {
      state.product = initialState.product
    },
    handleActivePagination: (state, { payload }) => {
      state.active = payload
    },
    handleCategory: (state, { payload }) => {
      state.category = payload
    },
    resetCategory: (state) => {
      state.category = ''
    },
  },
})

export const {
  resetProducts,
  handleActivePagination,
  handleCategory,
  resetCategory,
} = productSlice.actions

export default productSlice.reducer
