import { create } from "zustand";
import { meStoreScheme } from "./types";

export const useMeStore = create<meStoreScheme>((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),

  userRole: "",
  setUserRole: (role) => set({ userRole: role }),

  userEmail: "",
  setUserEmail: (email) => set({ userEmail: email }),
}));
