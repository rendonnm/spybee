"use client";

import { ProjectHeader } from "./components/ProjectHeader";
import { ProjectTable } from "./components/ProjectTable";
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
