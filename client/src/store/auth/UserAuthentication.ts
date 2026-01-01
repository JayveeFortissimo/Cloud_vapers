import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/api";
import type { RootState } from "../store";

interface UserAuthenticationState {
  accesstoken: string | null;
  user: {username:string, email:string, isAdmin:boolean} | null;
  isLoading:boolean;
  error?:string;
  autoCheck: boolean;
}

const initialState: UserAuthenticationState = {
  accesstoken: "",
  user: null,
  isLoading:false,
  autoCheck: true,
};

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (_, { getState, rejectWithValue }) => {

    try {
      const state = getState() as RootState;
      const token = state.userAuthenticationSlice.accesstoken;
      
      if (!token) {
        return rejectWithValue("No access token available");
      }

      const res = await api.get('api/profile',{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
       
       return res.data.user; 
    } catch (err: any) {
      console.error("Fetch error: ", err);
      const errorMessage = err?.message || err?.data?.message || "Failed to fetch user profile";
      return rejectWithValue(errorMessage);
    }
  }
)


export const userAuthenticationSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accesstoken = action.payload;
    },
    logout: (state) => {
      state.accesstoken = "";
      state.user = null;
    },
    setAutoCheck: (state, action: PayloadAction<boolean>) => {
      state.autoCheck = action.payload;
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; 
        state.error = undefined; 
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setToken, logout, setAutoCheck } = userAuthenticationSlice.actions;
export default userAuthenticationSlice.reducer;
