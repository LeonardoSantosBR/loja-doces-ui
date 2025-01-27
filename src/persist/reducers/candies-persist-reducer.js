import { persistReducer } from "redux-persist";
import { persistConfig } from "../persist-config";
import candiesReducer from "../../slices/candies.slice";

const candiesPersistedReducer = persistReducer(persistConfig, candiesReducer);
export default candiesPersistedReducer