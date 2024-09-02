import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '../features/modals/modalSlice'
import cartslice from '../features/cart/cartslice'
export const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
    cartslice: cartslice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
