import { configureStore } from "@reduxjs/toolkit";
import UserAutghenticationReducer from "./auth/UserAuthentication";

export const store = configureStore({
	reducer: { UserAutghenticationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
