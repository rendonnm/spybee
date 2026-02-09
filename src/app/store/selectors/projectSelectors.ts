import rawProjects from "@/app/_data/mock_data.json";
import type { Project } from "@/app/types/project";
import type { ProjectState } from "@/app/store/useProjectStore";
import { filterProjects, sortProjects } from "@/app/utils/project";

const ITEMS_PER_PAGE = 10;

export const allProjects = rawProjects as Project[];

function getSortedFiltered(state: ProjectState) {
  const filtered = filterProjects(allProjects, state.search);
  return sortProjects(filtered, state.sortBy, state.isAscending);
}

export function selectTotalPages(state: ProjectState) {
  const sorted = getSortedFiltered(state);
  return Math.max(1, Math.ceil(sorted.length / ITEMS_PER_PAGE));
}

export function selectActivePage(state: ProjectState) {
  return Math.min(state.currentPage, selectTotalPages(state));
}

export function selectProjects(state: ProjectState) {
  const sorted = getSortedFiltered(state);
  const activePage = selectActivePage(state);
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  return sorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);
}
