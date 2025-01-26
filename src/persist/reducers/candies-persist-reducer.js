import { persistReducer } from "redux-persist";
import { persistConfig } from "../persist-config";
import candiesReducer from "../../slices/candies.slice";

export const CandiesPersistedReducer = persistReducer(persistConfig, candiesReducer);
