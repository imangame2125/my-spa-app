// src/store/auth/auth-reducers.ts
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthInitialState } from './auth-type';

const authReducers = {
  setMobileNumber: (state: AuthInitialState, action: PayloadAction<string>) => {
    state.mobileNumber = action.payload;
  },
};

export default authReducers;
