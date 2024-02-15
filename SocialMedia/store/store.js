import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './authSlice'
const store = configureStore({
  reducer: {
    AuthSliceReducer
  }
})

export default store
