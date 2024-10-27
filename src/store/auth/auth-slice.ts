import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { getLoggedInUser, userLogin } from './auth-extra-reducers';
import initialState from './auth-initialState';
import { UserLoginResponse } from './auth-type';
import authReducers from './auth-reducers';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<UserLoginResponse>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.error = null;
      });

      builder
      .addCase(getLoggedInUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.fullname = action.payload.lastName;
        state.error = null;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;