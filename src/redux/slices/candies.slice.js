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
      state.value?.push({
        id,
        nome,
        quantidade,
        preço,
      });
    },
    updateCandy: (state, actions) => {
      const { id, nome, preço } = actions.payload;
      for (const candy of state.value) {
        if (candy.id === id) {
          candy.nome = nome;
          candy.preço = preço;
        }
      }
    },
    incrementQuantity: (state, actions) => {
      const { id } = actions.payload;
      for (const candy of state.value) {
        if (candy.id === id) {
          candy.quantidade += 1;
        }
      }
    },
    decrementQuantity: (state, actions) => {
      const { id } = actions.payload;
      for (const candy of state.value) {
        if (candy.quantidade == 0) return;
        if (candy.id === id) {
          candy.quantidade -= 1;
        }
      }
    },
    removeCandy: (state, actions) => {
      const { id } = actions.payload;
      const newList = state.value?.filter((vl) => vl.id !== id);
      state.value = newList;
    },
    resetStore: (state) => {
      state.value = [];
    },
  },
});

export const {
  addCandy,
  updateCandy,
  incrementQuantity,
  decrementQuantity,
  removeCandy,
  resetStore,
} = candiesSlice.actions;

export default candiesSlice.reducer;
