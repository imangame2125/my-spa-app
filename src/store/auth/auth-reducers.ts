import { PayloadAction } from "@reduxjs/toolkit";
import { LoginInitialState, UserLoginResponse } from "./auth-type";

const authReducers = {
  setUserData: (
    state: LoginInitialState,
    action: PayloadAction<UserLoginResponse>
  ) => {
    state.token = action.payload.token;
    state.userId = action.payload.userId;
  },
};

export default authReducers;