import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../Slice/counterSlice'



export const store = configureStore({
  reducer: {
    counter: cartSlice,
  },
})