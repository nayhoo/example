import { create } from 'zustand';

// Define the user authentication store
export type User = {
  username: string;
  email: string;
  // Add other properties as needed
};

type AuthStore = {
  isAuthenticated: boolean;
  user: User | null;

  login: (user: User) => void;
  logout: () => void;

  getIsAuthenticated: () => boolean;
  getUser: () => User | null;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Initial state
  isAuthenticated: false,
  user: null,

  // Setters
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),

  // Getters
  getIsAuthenticated: () => get().isAuthenticated,
  getUser: () => get().user,
}));
