import { configureStore } from "@reduxjs/toolkit";
import darkMoodSliceReducer from "./features/darkMoodSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      mood: darkMoodSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
