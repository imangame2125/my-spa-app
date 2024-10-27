// src/store/systems/system-slice.ts
import { createSlice } from '@reduxjs/toolkit';
import { systemInitialState } from './system-initialState';
import { fetchSystems } from './system-extra-reducers'; // Import the thunk

const systemSlice = createSlice({
  name: 'system',
  initialState: systemInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSystems.pending, (state) => {
        state.loading = true;  
        state.error = undefined; // Clear any previous errors
      })
      .addCase(fetchSystems.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when fetching is done
        state.systems = action.payload; // Store fetched systems
      })
      .addCase(fetchSystems.rejected, (state, action) => {
        state.loading = false; // Set loading to false on failure
        state.error = action.error.message || 'Failed to fetch systems'; // Set error message
      });
  },
});

export default systemSlice.reducer;
