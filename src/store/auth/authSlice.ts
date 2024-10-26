import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface User {
  name: string;
  icon: ReactNode;
}

const initialState: { currentUser: User | null } = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
