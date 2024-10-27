// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import userReducer from './user/user-slice';
import systemReducer from './systems/system-slice';
import subSystemsReducer from './subSystems/subSystems-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    system: systemReducer,
    subSystems:subSystemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
