import { createSlice } from "@reduxjs/toolkit";

export const UpdateModalOpenSlice = createSlice({
  name: "updateModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    turn: (state) => {
      state.value = !state.value;
    },
  },
});
export const { turn } = UpdateModalOpenSlice.actions;
export default UpdateModalOpenSlice.reducer;