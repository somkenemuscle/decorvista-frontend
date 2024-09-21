import { create } from 'zustand';

// Create a Zustand store for the foundUsername
const useUserStore = create((set) => ({
    foundUsername: '',
    setUsername: (username) => set({ foundUsername: username }),
}));

export default useUserStore;
