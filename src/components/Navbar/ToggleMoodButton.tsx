"use client";
import { useEffect } from "react";
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectMood, toggleMood } from "@/lib/features/darkMoodSlice";

const ToggleMoodButton = () => {
  const mood = useAppSelector(selectMood);
  const dispatch = useAppDispatch();

  const handleToggleMood = () => {
    mood === "dark"
      ? dispatch(toggleMood("light"))
      : dispatch(toggleMood("dark"));
  };

  useEffect(() => {
    mood === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [mood]);

  return (
    <button
      className="btn text-white md:text-black dark:text-white md:hover:bg-gray-300"
      onClick={handleToggleMood}
    >
      {mood === "light" ? (
        <LuSunMedium className="size-7 m-1" />
      ) : (
        <LuMoon className="size-7 m-1" />
      )}
    </button>
  );
};

export default ToggleMoodButton;
