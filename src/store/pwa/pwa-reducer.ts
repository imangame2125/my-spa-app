import { PayloadAction } from "@reduxjs/toolkit";
import { PwaState } from "./pwa-type";

const pwaReducers = {
  setInstallPrompt: (state: PwaState, action: PayloadAction<Event>) => {
    state.installPromptEvent = action.payload;
  },
};

export default pwaReducers;