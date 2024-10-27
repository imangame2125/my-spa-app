
import { createSlice } from '@reduxjs/toolkit';
import { subSystemsInitialState } from './subSystems-initialState';
import { subSystemsFetch } from './subSystem-extra-reducers';

const systemSlice = createSlice({
  name: 'subSystems',
  initialState: subSystemsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subSystemsFetch.pending, (state) => {
        state.loading = true
      })
      .addCase(subSystemsFetch.fulfilled, (state, action) => {
        state.value =action.payload
        state.loading = false        
      })
     
  },
});

export default systemSlice.reducer;
