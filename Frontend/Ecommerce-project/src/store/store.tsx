import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '../features/modals/modalSlice'
import cartslice from '../features/cart/cartslice'
import userSlice from '../features/user/userSlice'
export const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
    cartSlice: cartslice,
    userSlice: userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
