import type { Project, SortOption } from "@/app/types/project";

export function getIncidentCount(
  project: Project,
  type: "incidents" | "RFI" | "task",
) {
  return project.incidents.filter((inc) => inc.item === type).length;
}

export function sortProjects(
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

export function filterProjects(projects: Project[], search: string) {
  const trimmed = search.trim().toLowerCase();
  if (!trimmed) return projects;

  return projects.filter((project) =>
    project.title.toLowerCase().includes(trimmed),
  );
}
