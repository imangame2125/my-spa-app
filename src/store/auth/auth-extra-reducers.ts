// src/store/auth/auth-extra-reducers.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthUrls } from './auth-url';
import { UserLoginRequest, UserLoginResponse } from './auth-type';

export const userLogin = createAsyncThunk<UserLoginResponse, UserLoginRequest>(
  'auth/userLogin',
  async ({ mobile, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post<UserLoginResponse>(AuthUrls.Login, {
        mobile,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('authToken', token);

      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);
