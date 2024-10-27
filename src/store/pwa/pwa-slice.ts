import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pwaInitialState } from "./pwa-initialState";

const pwaSlice = createSlice({
  name: "pwa",
  initialState: pwaInitialState,
  reducers: {
    setInstallPrompt(state, action: PayloadAction<Event>) {
      state.installPromptEvent = action.payload;
    },
    setInstalled(state, action: PayloadAction<boolean>) {
      state.installed = action.payload;
    },
  },
});

export const { setInstallPrompt, setInstalled } = pwaSlice.actions;
export default pwaSlice.reducer;