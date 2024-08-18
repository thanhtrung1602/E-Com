import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
  name: "cookie",
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    getAccess: (state, action) => {
      state.accessToken = action.payload;
    },
    getRefresh: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { getAccess, getRefresh } = cookieSlice.actions;
export default cookieSlice.reducer;
