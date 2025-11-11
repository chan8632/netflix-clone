import { create } from "zustand";

export const usePageStore = create((set) => ({
  page: 1,
  setPageByParams: (value) => set(() => ({ page: value })),
}));
