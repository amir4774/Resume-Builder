import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const darkMoodSlice = createSlice({
  name: "darkMood",
  initialState: {
    value: localStorage.getItem("mood") || "light",
  },
  reducers: {
    toggleMood: (state, action: PayloadAction<"dark" | "light">) => {
      state.value = action.payload;
      localStorage.setItem("mood", action.payload);
    },
  },
});

export const { toggleMood } = darkMoodSlice.actions;
export const selectMood = (state: RootState) => state.mood.value;
export default darkMoodSlice.reducer;
