//configs
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

//Reducers
import candiesPersistedReducer from "../persist/reducers/candies-persist-reducer";
import isModalOpenReducer from "../slices/isModalOpen.slice";

const store = configureStore({
  reducer: {
    candies: candiesPersistedReducer,
    isModalOpen: isModalOpenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
