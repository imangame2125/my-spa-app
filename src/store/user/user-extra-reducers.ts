import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserResponse } from './user-type';
import { UserUrl } from './user-url';

export const fetchUsers = createAsyncThunk<UserResponse[]>(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('authToken');

            if (!token) {
                return rejectWithValue('Authentication token is missing');
            }

            const response = await axios.get(UserUrl.User, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch users');
        }
    }
);
