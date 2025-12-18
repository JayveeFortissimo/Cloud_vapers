import { configureStore } from "@reduxjs/toolkit";
import userAuthenticationSlice from "@/store/auth/UserAuthentication";

export const store = configureStore({
	reducer: { userAuthenticationSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
