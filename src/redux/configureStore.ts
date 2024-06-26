import { configureStore } from "@reduxjs/toolkit";
import { setUserReducer } from "./reducers/setUserReducer";

// ... existing code ...

export const store = configureStore({
  reducer: setUserReducer
});
