import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserAuthenticationState {
  token: string | null;
}

const initialState: UserAuthenticationState = {
  token: "",
};

export const userAuthenticationSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userAuthenticationSlice.actions;

export default userAuthenticationSlice.reducer;
