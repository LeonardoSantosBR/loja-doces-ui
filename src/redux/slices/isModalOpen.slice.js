import { createSlice } from "@reduxjs/toolkit";

export const isModalOpenSlice = createSlice({
  name: "isModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    turn: (state) => {
      state.value = !state.value;
    },
  },
});

export const { turn } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
