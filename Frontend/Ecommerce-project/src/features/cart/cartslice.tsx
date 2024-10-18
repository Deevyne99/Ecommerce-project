import { createSlice } from '@reduxjs/toolkit'
import { CartProps } from '../../interfaces/interface'
import { DefaultStateProps } from '../../interfaces/interface'
import { toast } from 'react-toastify'

const defaultState: DefaultStateProps = {
  cartItems: [],
  numOfItemsInCart: 0,
  cartTotal: 0,
  shipping: 100,
  tax: 0,
  orderTotal: 0,
}

// const getLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('cart') || 'null') || defaultState
// }

const cartSlice = createSlice({
  name: 'cartslice',
  initialState: defaultState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const { product, amount, price } = payload.product

      const item = state.cartItems.find(
        (cart: CartProps) => cart.product === product
      )

      if (item) {
        item.amount += amount
      } else {
        state.cartItems.push(payload.product)
      }
      state.numOfItemsInCart += amount
      state.cartTotal += price * amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Added to cart')
    },
    removeItem: (state, action) => {
      const { product, amount } = action.payload
      //search for the product
      const isProduct = state.cartItems.find(
        (i) => String(i.product) === product
      )
      //remove the product
      if (isProduct) {
        state.cartItems = state.cartItems.filter(
          (i) => String(i.product) !== product
        )
        toast.success('Deleted Successfully')
      }

      state.numOfItemsInCart = state.numOfItemsInCart - amount
      cartSlice.caseReducers.calculateTotals(state)
      //after removing the product from cart
      //remove the number of product from the number of items in cart
    },

    //     },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },

    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      //return default state
    },
  },
})

export default cartSlice.reducer

export const { addItemToCart, removeItem } = cartSlice.actions
