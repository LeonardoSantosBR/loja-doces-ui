import { createSlice } from "@reduxjs/toolkit";

export const NewModalVisibleSlice = createSlice({
  name: "newModalVisible",
  initialState: {
    value: false,
  },
  reducers: {
    turn: (state) => {
      state.value = !state.value;
    },
  },
});

export const { turn } = NewModalVisibleSlice.actions;
export default NewModalVisibleSlice.reducer;
