import { createSlice } from "@reduxjs/toolkit";

export const candyIdSlice = createSlice({
  name: "candyId",
  initialState: {
    value: "",
  },
  reducers: {
    setId: (state, actions) => {
      state.value = actions.payload.id;
    },
  },
});

export const { setId } = candyIdSlice.actions;
export default candyIdSlice.reducer;
