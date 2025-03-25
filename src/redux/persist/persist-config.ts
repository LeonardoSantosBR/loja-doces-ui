import storage from "redux-persist/lib/storage"; // Usando localStorage

export const persistConfig = {
  key: "root",
  storage,
};
