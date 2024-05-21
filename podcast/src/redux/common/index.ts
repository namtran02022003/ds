import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  userName: string;
}

const initialState: CommonState = {
  userName: "default name",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setUserName(state: CommonState, action: PayloadAction<{ name: string }>) {
      state.userName = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName } = commonSlice.actions;

export default commonSlice.reducer; // should be imported to global store
