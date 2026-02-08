import { Chip } from "@/app/components/Chip";
import styles from "@/app/styles/page.module.css";
import { ProjectOption } from "@/app/components/ProjectOption";

interface ProjectHeaderProps {
  searchValue: string;
  handleSearch: (value: string) => void;
}

export function ProjectHeader({
  searchValue,
  handleSearch,
}: ProjectHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles["project-title-container"]}>
        <h2 className={styles.title}>Mis proyectos</h2>
        <Chip />
      </div>
      <div className={styles.options}>
        <ProjectOption value="1" />
        <div className={styles["option-group"]}>
          <ProjectOption value="1" />
          <ProjectOption value="1" />
          <ProjectOption value="1" />
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Buscar"
            className={styles.search}
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
        <button className={styles.button}>Crear proyecto</button>
      </div>
    </header>
  );
}
