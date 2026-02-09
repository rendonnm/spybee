import { useState } from "react";
import type { SortOption } from "@/app/types/project";

const DEFAULT_SORT: SortOption = "alphabetical";

export function useProjectFilters() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>(DEFAULT_SORT);
  const [isAscending, setIsAscending] = useState(true);

  function handleSearch(value: string) {
    setSearch(value);
  }

  function handleSortChange(value: SortOption) {
    setSortBy(value);
    setIsAscending(value === "alphabetical");
  }

  function toggleSortDirection() {
    setIsAscending((prev) => !prev);
  }

  return {
    search,
    sortBy,
    isAscending,
    handleSearch,
    handleSortChange,
    toggleSortDirection,
  };
}
