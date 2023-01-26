import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/AuthSlice'
import vaultReducer from './Slices/VaultSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    vault: vaultReducer,
  }
})
export default store