import { createSlice } from "@reduxjs/toolkit";

export const isCandyModalSlice = createSlice({
  name: "isCandyModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    turn: (state) => {
      state.value = !state.value;
    },
  },
});

export const { turn } = isCandyModalSlice.actions;
export default isCandyModalSlice.reducer;
