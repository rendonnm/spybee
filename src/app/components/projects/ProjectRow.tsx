import type { Project } from "@/app/types/project";
import { ProjectPlan } from "@/app/components/projects/ProjectPlan";
import { ProjectStatus } from "@/app/components/projects/ProjectStatus";
import { ProjectUsers } from "@/app/components/projects/ProjectUsers";
import styles from "@/app/styles/table.module.css";
import { ProjectItems } from "@/app/components/projects/ProjectItems";
import { ProjectTitle } from "@/app/components/projects/ProjectTitle";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const incidents = project.incidents.filter(
    (inc) => inc.item === "incidents",
  ).length;

  const rfis = project.incidents.filter((inc) => inc.item === "RFI").length;

  const tasks = project.incidents.filter((inc) => inc.item === "task").length;

  const mainUsers = project.users.slice(0, 5);
  const otherUsers = project.users.slice(5);

  return (
    <tr className={styles.row}>
      <td>
        <ProjectTitle
          title={project.title}
          createdAt={project.createdAt}
          lastUpdated={project.lastUpdated}
        />
      </td>
      <td>
        <ProjectPlan value={project.projectPlanData.plan} />
      </td>
      <td>
        <ProjectStatus value={project.status} />
      </td>
      <td>
        <ProjectUsers mainUsers={mainUsers} otherUsers={otherUsers} />
      </td>
      <td>
        <ProjectItems incidents={incidents} rfis={rfis} tasks={tasks} />
      </td>
    </tr>
  );
}
