import { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { toggleMood } from "./darkMoodSlice";

export const darkMoodMiddleware: Middleware =
  () => (next) => (action: unknown) => {
    if (toggleMood.match(action as PayloadAction<"dark" | "light">)) {
      const moodAction = action as PayloadAction<"dark" | "light">;
      localStorage.setItem("mood", moodAction.payload);
    }

    return next(action);
  };
