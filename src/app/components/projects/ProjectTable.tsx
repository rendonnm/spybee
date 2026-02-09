"use client";

import { ProjectRow } from "@/app/components/projects/ProjectRow";
import { Pagination } from "@/app/components/ui/Pagination";
import { useProjectStore } from "@/app/store/useProjectStore";
import {
  selectProjects,
  selectActivePage,
  selectTotalPages,
} from "@/app/store/selectors/projectSelectors";
import styles from "@/app/styles/table.module.css";
import { useShallow } from "zustand/react/shallow";

export function ProjectTable() {
  const projects = useProjectStore(useShallow(selectProjects));
  const currentPage = useProjectStore(selectActivePage);
  const totalPages = useProjectStore(selectTotalPages);
  const setPage = useProjectStore((s) => s.setPage);

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
        onPageChange={setPage}
      />
    </>
  );
}
