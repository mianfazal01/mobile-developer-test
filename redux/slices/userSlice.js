import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
  name: "user",
  initialState: {
    userData: "",
    accessToken: null,
    emailAddress: "",
  },

  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
  },
});

export const { setAccessToken, setUserData, setEmailAddress } =
  userSlicer.actions;

export default userSlicer.reducer;
