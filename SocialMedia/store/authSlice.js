import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false, //bydefault user not authenticated so false
  userData: null
}

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true
      state.userData = action.payload.userData
    },
    //? login or logout they are actions inside reducer
    logout: state => {
      state.status = false
      state.userData = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
