import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface UserAuthenticationState {
	name: string;
}

const initialState: UserAuthenticationState = {
	name: "Jayvee",
};

export const userAuthenticationSlice = createSlice({
	name: "userrAuthentication",
	initialState,
	reducers: {},
});

export default userAuthenticationSlice.reducer;
