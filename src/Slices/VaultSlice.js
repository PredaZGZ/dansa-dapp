import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true, 
}

const vaultSlice = createSlice({
  name: 'vault',
  initialState,
  reducers: {
    startLoading : (state) => {
      state.loading = true;
    },
    endLoading : (state) => {
      state.loading = false;
    },

  }
})

export const { startLoading, endLoading } = vaultSlice.actions;
export default vaultSlice.reducer;
