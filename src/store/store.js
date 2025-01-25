import { configureStore } from "@reduxjs/toolkit";
import candiesReducer from "../slices/candies.slice";
import isCandyModalOpenReducer from "../slices/isCandyModalOpen.slice";

export default configureStore({
  reducer: {
    candies: candiesReducer,
    isCandyModalOpen: isCandyModalOpenReducer,
  },
});
