import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {
    id : "",
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
    setId : (state, action) => {
      state.userInfo.id = action.payload;
    },
    Logout : (state) => {
      state.userInfo = {
        id : "",
        name : "",
        email : "",
      } 
      state.userToken = null
    },
    setLogin : (state, action) => {
      state.userInfo = {
        id : action.payload._id,
        name : action.payload.name,
        email : action.payload.email,
      } 
      state.userToken = action.payload.token
    }
  }
})

export const { setName, setEmail, setToken, setId, Logout, setLogin } = authSlice.actions;
export default authSlice.reducer;
