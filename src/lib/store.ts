import { create } from 'zustand';

interface UserData {
    birthDate?: string;
    birthLocation?: string;
    birthTime?: string | null;
    astroInterest?: string;
}

interface AstrologyStore {
    userData: UserData;
    setUserData: (data: Partial<UserData>) => void;
    clearUserData: () => void;
    getUserData: () => UserData;
}

export const useAstrologyStore = create<AstrologyStore>((set, get) => ({
    userData: {},
    setUserData: (data) =>
        set((state) => ({
            userData: { ...state.userData, ...data },
        })),
    clearUserData: () => set({ userData: {} }),
    getUserData: () => get().userData,
}));
