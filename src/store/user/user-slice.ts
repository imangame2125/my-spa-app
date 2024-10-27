import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from './user-type';
import { fetchUsers } from './user-extra-reducers';

interface UserState {
    data: UserResponse[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserResponse[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            });
    },
});

export default userSlice.reducer;
