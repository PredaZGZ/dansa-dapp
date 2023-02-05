import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weights: {
    dataChart : {},
  } 
}

const fitnessSlice = createSlice({
  name: 'fitness',
  initialState,
  reducers: {
    setdataChart : (state, action) => {
      state.dataChart = action.payload;
    },
  }
})

export const { setdataChart } = fitnessSlice.actions;
export default fitnessSlice.reducer;
