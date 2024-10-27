
import { createSlice } from '@reduxjs/toolkit';
import { systemInitialState } from './system-initialState';
import { fetchSystems } from './system-extra-reducers';

const systemSlice = createSlice({
  name: 'system',
  initialState: systemInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSystems.pending, (state) => {
        state.loading = true;
        state.error = undefined; 
      })
      .addCase(fetchSystems.fulfilled, (state, action) => {
        state.loading = false;
        state.systems = action.payload; 
      })
      .addCase(fetchSystems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch systems'; 
      });
  },
});

export default systemSlice.reducer;
