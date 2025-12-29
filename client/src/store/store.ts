import { configureStore } from "@reduxjs/toolkit";
import userAuthenticationSlice from "@/store/auth/UserAuthentication";
import allProducts from "@/store/AllProducts";

export const store = configureStore({
	reducer: { userAuthenticationSlice, allProducts },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
