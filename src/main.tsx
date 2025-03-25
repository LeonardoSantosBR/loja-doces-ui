import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.js";
import { store, persistor } from "./redux/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
