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
      //search for the product
      const product = state.cartItems.find((i) => i.cartID === cartID)
      //remove the product
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)
      //after removing the product from cart
      //remove the number of product from the number of items in cart
      state.numItemsInCart -= product.quantity
      //remove the price of product from the price of cartTotal of items in cart
      state.cartTotal -= product.price * product.quantity
      //recalculate the orderTotal
      cartSlice.caseReducers.calculateTotals(state)
      // toast.error('Item removed from cart')
    },
    //edit cart
    // //     editItem:(state,action)=>{
    // // const {cartID,amount} =  action.payload
    // // const item = state.cartItems.find((data)=>data.id ===cartID)

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
