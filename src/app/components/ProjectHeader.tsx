import { Chip } from "@/app/components/Chip";
import styles from "@/app/styles/page.module.css";
import { ProjectOption } from "@/app/components/ProjectOption";

export function ProjectHeader() {
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
          <input type="text" placeholder="Buscar" className={styles.search} />
        </form>
        <button className={styles.button}>Crear proyecto</button>
      </div>
    </header>
  );
}
