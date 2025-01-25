import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const candiesSlice = createSlice({
  name: "candies",
  initialState: {
    value: [],
  },
  reducers: {
    addCandy: (state, actions) => {
      const id = uuidv4();
      const { nome, quantidade, preço } = actions.payload;

      state.value.push({
        id,
        nome,
        quantidade,
        preço,
      });
    },

    removeCandy: (state) => {
      //removerá o doce selecionado....
    },
  },
});

export const { addCandy, removeCandy } = candiesSlice.actions;
export default candiesSlice.reducer;
