import { create } from "zustand";

interface UserStore {
  userName: string;
  userRole: string;
  userEmail: string;

  setUserName: (name: string) => void;
  setUserRole: (role: string) => void;
  setUserEmail: (email: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userName: "",
  userRole: "",
  userEmail: "",

  setUserName: (name) => set({ userName: name }),
  setUserRole: (role) => set({ userRole: role }),
  setUserEmail: (email) => set({ userEmail: email }),
}));
