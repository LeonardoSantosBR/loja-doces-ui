//configs
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

//Reducers
import candiesPersistedReducer from "../persist/reducers/candies-persist-reducer";
import isCandyModalOpenReducer from "../slices/isCandyModalOpen.slice";

const store = configureStore({
  reducer: {
    candies: candiesPersistedReducer,
    isCandyModalOpen: isCandyModalOpenReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
