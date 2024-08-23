import { createSlice } from '@reduxjs/toolkit'

interface ModalProps {
  showSidebar: boolean
  showCart: boolean
}

const defaultState: ModalProps = {
  showSidebar: false,
  showCart: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: defaultState,
  reducers: {
    handleShowSideBar: (state) => {
      state.showSidebar = !state.showSidebar
    },
    handleShowCart: (state) => {
      state.showCart = !state.showCart
    },
  },
})

export const { handleShowSideBar, handleShowCart } = modalSlice.actions

export default modalSlice.reducer
