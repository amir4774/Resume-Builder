import { configureStore } from "@reduxjs/toolkit";
import darkMoodSliceReducer from "./features/darkMoodSlice";
import { darkMoodMiddleware } from "./features/darkMoodMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      mood: darkMoodSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(darkMoodMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
