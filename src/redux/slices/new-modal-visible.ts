import { createSlice } from "@reduxjs/toolkit";

export const NewModalVisibleSlice = createSlice({
  name: "newModalVisible",
  initialState: {
    value: false,
  },
  reducers: {
    turnNewModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { turnNewModal } = NewModalVisibleSlice.actions;
export default NewModalVisibleSlice.reducer;
