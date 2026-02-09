"use client";

import { Chip } from "@/app/components/ui/Chip";
import styles from "@/app/styles/page.module.css";
import { ProjectOption } from "@/app/components/ui/ProjectOption";
import { SortDirectionIcon } from "@/app/components/icons/SortDirectionIcon";
import { SearchIcon } from "@/app/components/icons/SearchIcon";
import { PlusIcon } from "@/app/components/icons/PlusIcon";
import { GridIcon } from "@/app/components/icons/GridIcon";
import { MapPinIcon } from "@/app/components/icons/MapPinIcon";
import { useProjectStore } from "@/app/store/useProjectStore";
import type { SortOption } from "@/app/types/project";

export function ProjectHeader() {
  const search = useProjectStore((s) => s.search);
  const sortBy = useProjectStore((s) => s.sortBy);
  const isAscending = useProjectStore((s) => s.isAscending);
  const setSearch = useProjectStore((s) => s.setSearch);
  const setSortBy = useProjectStore((s) => s.setSortBy);
  const toggleSortDirection = useProjectStore((s) => s.toggleSortDirection);

  return (
    <header className={styles.header}>
      <div className={styles["project-title-container"]}>
        <h2 className={styles.title}>Mis proyectos</h2>
        <Chip />
      </div>
      <div className={styles.options}>
        <ProjectOption>
          <button
            onClick={toggleSortDirection}
            className={styles["sort-direction-button"]}
            aria-label={
              isAscending
                ? "Cambiar a orden descendente"
                : "Cambiar a orden ascendente"
            }
          >
            <SortDirectionIcon isAscending={isAscending} />
          </button>
        </ProjectOption>
        <div className={styles["option-group"]}>
          <ProjectOption>
            <select
              name="sort"
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="alphabetical">Orden alfabético</option>
              <option value="incidents">Cantidad de incidencias</option>
              <option value="rfis">Cantidad de RFI</option>
              <option value="tasks">Cantidad de tareas</option>
            </select>
          </ProjectOption>
          <ProjectOption>
            <GridIcon />
          </ProjectOption>
          <ProjectOption>
            <MapPinIcon />
          </ProjectOption>
        </div>
        <form action="">
          <div className={styles["search-wrapper"]}>
            <input
              type="text"
              placeholder="Buscar"
              className={styles.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className={styles["search-icon"]} />
          </div>
        </form>
        <button className={styles.button}>
          <PlusIcon />
          Crear proyecto
        </button>
      </div>
    </header>
  );
}
