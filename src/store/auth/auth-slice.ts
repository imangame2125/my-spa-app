// src/store/auth/auth-slice.ts
import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { userLogin } from './auth-extra-reducers';
import initialState from './auth-initialState';
import { UserLoginResponse } from './auth-type';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMobileNumber(state, action: PayloadAction<string>) {
      state.mobileNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.userLogin.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<UserLoginResponse>) => {
        state.userLogin.loading = false;
        state.userLogin.data = action.payload;
        state.userLogin.error = null;
      })
    
  },
});

export const { setMobileNumber } = authSlice.actions;
export default authSlice.reducer;
