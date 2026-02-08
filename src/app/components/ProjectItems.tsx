import { ProjectItem } from "@/app/components/ProjecItem";
import styles from "@/app/styles/table.module.css";

interface ProjectItemsProps {
  incidents: number;
  rfis: number;
  tasks: number;
}

export function ProjectItems({ incidents, rfis, tasks }: ProjectItemsProps) {
  return (
    <div className={styles["kpi-container"]}>
      <ProjectItem title="Incidencias" quantity={incidents} />
      <ProjectItem title="RFI" quantity={rfis} />
      <ProjectItem title="Tareas" quantity={tasks} />
    </div>
  );
}
