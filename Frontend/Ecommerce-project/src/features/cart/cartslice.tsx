import { createSlice } from '@reduxjs/toolkit'

import { DefaultStateProps } from '../../interfaces/interface'

const defaultState: DefaultStateProps = {
  cartItems: [],
  numOfItemsInCart: 0,
  cartTotal: 0,
  shipping: 100,
  tax: 0,
  orderTotal: 0,
}

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart') || 'null') || defaultState
}

const cartSlice = createSlice({
  name: 'cartslice',
  initialState: getLocalStorage(),
  reducers: {
    addItemToCart: (state, action) => {
      const { product } = action.payload
      const item = state.cartItems.find((cart) => cart.id === product.id)
      if (item) {
        item.quantity += product.quantity
      } else {
        state.cartItems.push(item)
      }
      state.numOfItemsInCart += product.quantity
      state.cartTotal += product.price * product.quantity
      cartSlice.caseReducers.calculateTotals(state)
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload
      const product = state.cartItems.find((i) => i.cartID === cartID)
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)
      state.numItemsInCart -= product.quantity
      state.cartTotal -= product.price * product.quantity
      cartSlice.caseReducers.calculateTotals(state)
      // toast.error('Item removed from cart')
    },
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
