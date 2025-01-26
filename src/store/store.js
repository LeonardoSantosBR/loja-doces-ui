import { configureStore } from "@reduxjs/toolkit";
import isCandyModalOpenReducer from "../slices/isCandyModalOpen.slice";
import { persistStore } from 'redux-persist';
import { CandiesPersistedReducer } from "../persist/reducers/candies-persist-reducer";

const store = configureStore({
  reducer: {
    candies: CandiesPersistedReducer,
    isCandyModalOpen: isCandyModalOpenReducer,
  },
});
 
const persistor = persistStore(store);
export { store, persistor };
