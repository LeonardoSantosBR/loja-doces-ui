import { createSlice } from "@reduxjs/toolkit";

export const IncrementManyOpenSlice = createSlice({
  name: "incrementManyModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    turnIncrementManyModal: (state) => {
      state.value = !state.value;
    },
  },
});
export const { turnIncrementManyModal } = IncrementManyOpenSlice.actions;
export default IncrementManyOpenSlice.reducer;