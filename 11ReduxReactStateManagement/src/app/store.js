import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: todoReducer//for data flow yeslai thaha huna parxa  sop reducer kaha xan
})
