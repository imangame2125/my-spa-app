// src/store/systems/system-extra-reducers.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { System } from './system-type'; 
import { SystemUrl } from './system-url';
import { RootState } from '../index'; 
import axiosInstance from '../axios';

export const fetchSystems = createAsyncThunk<System[], void, { state: RootState }>(
  'system/fetchSystems',
  async () => {
    const response = await axiosInstance.get<System[]>(SystemUrl.GetAllSystems);
    return response.data;
  }
);
