import { Chip } from "@/app/components/ui/Chip";
import styles from "@/app/styles/page.module.css";
import { ProjectOption } from "@/app/components/ui/ProjectOption";
import { SortDirectionIcon } from "@/app/components/projects/SortDirectionIcon";
import type { SortOption } from "@/app/types/project";

interface ProjectHeaderProps {
  search: string;
  sortBy: SortOption;
  isAscending: boolean;
  onSearch: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  onToggleSortDirection: () => void;
}

export function ProjectHeader({
  search,
  sortBy,
  isAscending,
  onSearch,
  onSortChange,
  onToggleSortDirection,
}: ProjectHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles["project-title-container"]}>
        <h2 className={styles.title}>Mis proyectos</h2>
        <Chip />
      </div>
      <div className={styles.options}>
        <ProjectOption>
          <button
            onClick={onToggleSortDirection}
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
              onChange={(e) => onSortChange(e.target.value as SortOption)}
            >
              <option value="alphabetical">Orden alfabético</option>
              <option value="incidents">Cantidad de incidencias</option>
              <option value="rfis">Cantidad de RFI</option>
              <option value="tasks">Cantidad de tareas</option>
            </select>
          </ProjectOption>
          <ProjectOption>
            <div>a</div>
          </ProjectOption>
          <ProjectOption>
            <div>a</div>
          </ProjectOption>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Buscar"
            className={styles.search}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>
        <button className={styles.button}>Crear proyecto</button>
      </div>
    </header>
  );
}
