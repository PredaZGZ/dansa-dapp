import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import FitnessReducer from './Slices/FitnessSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    fitness: FitnessReducer,
  }
})

store.subscribe(() => {
  console.log('Store updated: ', store.getState());
});

export default store