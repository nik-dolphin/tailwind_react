import create from "zustand";
import { devtools } from "zustand/middleware";

export const useModeStore = create(
  devtools((set) => ({
    toggleMode: false,
    setToggleMode: (toggleMode) => set({ toggleMode }, false, "setToggleMode"),
  }))
);
