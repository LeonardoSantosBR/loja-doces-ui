//configs
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

//Reducers
import candiesPersistedReducer from "../persist/reducers/candies-persist-reducer";
import NewModalOpenSlice from "../slices/new-modal-visible";
import UpdateModalVisibleSlice from "../slices/update-modal-visible";
import candyIdSlice from "../slices/candy-id.slice";

const store = configureStore({
  reducer: {
    candies: candiesPersistedReducer,
    newModalVisible: NewModalOpenSlice,
    updateModalVisible: UpdateModalVisibleSlice,
    candyId: candyIdSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
