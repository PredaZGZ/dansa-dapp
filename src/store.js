import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/AuthSlice'
import FitnessReducer from './Slices/FitnessSlice';
import vaultReducer from './Slices/VaultSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    vault: vaultReducer,
    fitness: FitnessReducer,
  }
})

store.subscribe(() => {
  console.log('Store updated: ', store.getState());
});

export default store