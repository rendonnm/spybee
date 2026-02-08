"use client";

import { useState } from "react";
import rawProjects from "@/app/_data/mock_data.json";
import { ProjectRow } from "@/app/components/ProjectRow";
import { Project } from "@/app/types/project";
import { Pagination } from "@/app/components/Pagination";
import styles from "@/app/styles/table.module.css";

const ITEMS_PER_PAGE = 10;

interface ProjectsProps {
  searchValue: string;
}

export function Projects({ searchValue }: ProjectsProps) {
  let projects = rawProjects as Project[];

  if (searchValue.trim() !== "") {
    projects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);
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
            {currentProjects.map((project) => {
              return <ProjectRow key={project._id} project={project} />;
            })}
          </tbody>
        </table>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
