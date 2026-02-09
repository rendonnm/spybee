"use client";

import { ProjectHeader } from "./components/projects/ProjectHeader";
import { ProjectTable } from "./components/projects/ProjectTable";
import { useProjectFilters } from "./hooks/useProjectFilters";

export default function Home() {
  const {
    search,
    sortBy,
    isAscending,
    handleSearch,
    handleSortChange,
    toggleSortDirection,
  } = useProjectFilters();

  return (
    <>
      <ProjectHeader
        search={search}
        sortBy={sortBy}
        isAscending={isAscending}
        onSearch={handleSearch}
        onSortChange={handleSortChange}
        onToggleSortDirection={toggleSortDirection}
      />
      <ProjectTable search={search} sortBy={sortBy} isAscending={isAscending} />
    </>
  );
}
