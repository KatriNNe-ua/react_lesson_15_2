import { configureStore } from '@reduxjs/toolkit'
import { dreamApi } from "./../entities/dreams/model/dreamApi";

export const store = configureStore({
  reducer: {
    [dreamApi.reducerPath]: dreamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dreamApi.middleware),
});
