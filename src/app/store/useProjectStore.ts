import { create } from "zustand";
import type { SortOption } from "@/app/types/project";

const DEFAULT_SORT: SortOption = "alphabetical";

export interface ProjectState {
  search: string;
  sortBy: SortOption;
  isAscending: boolean;
  currentPage: number;
  selectedProjectId: string | null;
}

interface ProjectActions {
  setSearch: (value: string) => void;
  setSortBy: (value: SortOption) => void;
  toggleSortDirection: () => void;
  setPage: (page: number) => void;
  resetPage: () => void;
  selectProject: (id: string | null) => void;
}

type ProjectStore = ProjectState & ProjectActions;

export const useProjectStore = create<ProjectStore>((set) => ({
  search: "",
  sortBy: DEFAULT_SORT,
  isAscending: true,
  currentPage: 1,
  selectedProjectId: null,

  setSearch: (value: string) => set({ search: value, currentPage: 1 }),

  setSortBy: (value: SortOption) =>
    set({
      sortBy: value,
      isAscending: value === "alphabetical",
      currentPage: 1,
    }),

  toggleSortDirection: () =>
    set((state) => ({ isAscending: !state.isAscending })),

  setPage: (page: number) => set({ currentPage: page }),

  resetPage: () => set({ currentPage: 1 }),

  selectProject: (id: string | null) => set({ selectedProjectId: id }),
}));
