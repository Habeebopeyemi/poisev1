import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { poiseApi } from "redux/actions/services";

export const store = configureStore({
  reducer: {
    [poiseApi.reducerPath]: poiseApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(poiseApi.middleware),
});

setupListeners(store.dispatch);
