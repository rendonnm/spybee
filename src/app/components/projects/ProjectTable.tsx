"use client";

import { ProjectRow } from "@/app/components/projects/ProjectRow";
import { Pagination } from "@/app/components/ui/Pagination";
import { useProjects } from "@/app/hooks/useProjects";
import styles from "@/app/styles/table.module.css";
import type { SortOption } from "@/app/types/project";

interface ProjectTableProps {
  search: string;
  sortBy: SortOption;
  isAscending: boolean;
}

export function ProjectTable({
  search,
  sortBy,
  isAscending,
}: ProjectTableProps) {
  const { projects, currentPage, totalPages, handlePageChange } = useProjects({
    search,
    sortBy,
    isAscending,
  });

  return (
    <>
      <section className={styles.container}>
        <table>
          <caption className="sr-only">Proyectos de Spybee</caption>
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Plan</th>
              <th>Estado</th>
              <th>Equipo</th>
              <th>Items por vencer</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectRow key={project._id} project={project} />
            ))}
          </tbody>
        </table>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
