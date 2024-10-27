import { createAsyncThunk } from '@reduxjs/toolkit';
import { System } from './system-type';
import axiosInstance from '../axios';

export const fetchSystems = createAsyncThunk<System[], void>(
  'system/fetchSystems',
  async () => {
    const response = await axiosInstance.get('/System/GetAll'); 
    return response.data; 
  }
);
