import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null, _id: null },
  token: null,
  isRefreshing: false,
  statistics: null,
  avatar: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
