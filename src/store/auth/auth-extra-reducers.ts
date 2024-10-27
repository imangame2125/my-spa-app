import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthUrls } from './auth-url';
import { LoggedInUser, LoggedInUserResponse, UserLoginRequest, UserLoginResponse } from './auth-type';
import axiosInstance from '../axios';

export const userLogin = createAsyncThunk<UserLoginResponse, UserLoginRequest>(
  'auth/userLogin',
  async ({ mobile, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<UserLoginResponse>(AuthUrls.Login, {
        mobile,
        password,
      });

      const { token, userId } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);

      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getLoggedInUser = createAsyncThunk<LoggedInUserResponse, LoggedInUser>(
  'auth/getLoggedInUser',
  async ({sysId, userId}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<LoggedInUserResponse>(AuthUrls.GetUser, {
        sysId,
        userId,
      });

      return response.data;

    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Get user failed";
      return rejectWithValue(errorMessage);
    }
  }
);