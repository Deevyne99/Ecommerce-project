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
    handleCloseSideBar: (state) => {
      state.showSidebar = false
    },
    handleShowCart: (state) => {
      state.showCart = !state.showCart
    },
    handleCloseCart: (state) => {
      state.showCart = false
    },
  },
})

export const {
  handleShowSideBar,
  handleShowCart,
  handleCloseCart,
  handleCloseSideBar,
} = modalSlice.actions

export default modalSlice.reducer
