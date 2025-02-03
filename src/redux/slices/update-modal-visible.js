import { createSlice } from "@reduxjs/toolkit";

export const UpdateModalOpenSlice = createSlice({
  name: "updateModalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    turnUpdateModal: (state) => {
      state.value = !state.value;
    },
  },
});
export const { turnUpdateModal } = UpdateModalOpenSlice.actions;
export default UpdateModalOpenSlice.reducer;