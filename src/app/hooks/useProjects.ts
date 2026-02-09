import { useState } from "react";
import rawProjects from "@/app/_data/mock_data.json";
import type { Project, SortOption } from "@/app/types/project";

const ITEMS_PER_PAGE = 10;

function getIncidentCount(
  project: Project,
  type: "incidents" | "RFI" | "task",
) {
  return project.incidents.filter((inc) => inc.item === type).length;
}

function sortProjects(
  projects: Project[],
  sortBy: SortOption,
  isAscending: boolean,
) {
  return [...projects].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "alphabetical":
        comparison = a.title.localeCompare(b.title);
        break;
      case "incidents":
        comparison =
          getIncidentCount(a, "incidents") - getIncidentCount(b, "incidents");
        break;
      case "rfis":
        comparison = getIncidentCount(a, "RFI") - getIncidentCount(b, "RFI");
        break;
      case "tasks":
        comparison = getIncidentCount(a, "task") - getIncidentCount(b, "task");
        break;
    }

    return isAscending ? comparison : -comparison;
  });
}

function filterProjects(projects: Project[], search: string) {
  const trimmed = search.trim().toLowerCase();
  if (!trimmed) return projects;

  return projects.filter((project) =>
    project.title.toLowerCase().includes(trimmed),
  );
}

interface UseProjectsParams {
  search: string;
  sortBy: SortOption;
  isAscending: boolean;
}

export function useProjects({
  search,
  sortBy,
  isAscending,
}: UseProjectsParams) {
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = rawProjects as Project[];
  const filtered = filterProjects(allProjects, search);
  const sorted = sortProjects(filtered, sortBy, isAscending);

  const totalPages = Math.max(1, Math.ceil(sorted.length / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = sorted.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  function resetPage() {
    setCurrentPage(1);
  }

  return {
    projects: paginatedProjects,
    currentPage: activePage,
    totalPages,
    handlePageChange,
    resetPage,
  };
}
