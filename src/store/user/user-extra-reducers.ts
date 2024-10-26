import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserResponse } from './user-type';
import { UserUrl } from './user-url';

export const fetchUsers = createAsyncThunk<UserResponse[], void>(
    'auth/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<UserResponse[]>(UserUrl.User); 
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || "Failed to fetch users";
            return rejectWithValue(errorMessage);
        }
    }
);
