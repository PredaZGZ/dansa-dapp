import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {
    name : "",
    email : "",
  }, 
  userToken: null, 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName : (state, action) => {
      state.userInfo.name = action.payload;
    },
    setEmail : (state, action) => {
      state.userInfo.email = action.payload;
    },
    setToken : (state, action) => {
      state.userToken = action.payload;
    },
    Logout : (state) => {
      state.userInfo = {
        name : "",
        email : "",
      } 
      state.userToken = null
    }
  }
})

export const { setName, setEmail, setToken, Logout } = authSlice.actions;
export default authSlice.reducer;
