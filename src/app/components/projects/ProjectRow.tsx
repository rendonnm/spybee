import type { Project } from "@/app/types/project";
import { ProjectPlan } from "@/app/components/projects/ProjectPlan";
import { ProjectStatus } from "@/app/components/projects/ProjectStatus";
import { ProjectUsers } from "@/app/components/projects/ProjectUsers";
import styles from "@/app/styles/table.module.css";
import { ProjectItems } from "@/app/components/projects/ProjectItems";
import { ProjectTitle } from "@/app/components/projects/ProjectTitle";
import { useProjectStore } from "@/app/store/useProjectStore";
import type { Item } from "@/app/types/project";

interface ProjectRowProps {
  project: Project;
}

function countIncidentsByType(project: Project, type: Item): number {
  return project.incidents.filter((inc) => inc.item === type).length;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const selectedProjectId = useProjectStore((s) => s.selectedProjectId);
  const selectProject = useProjectStore((s) => s.selectProject);

  const incidents = countIncidentsByType(project, "incidents");
  const rfis = countIncidentsByType(project, "RFI");
  const tasks = countIncidentsByType(project, "task");

  const mainUsers = project.users.slice(0, 5);
  const otherUsers = project.users.slice(5);

  const isSelected = selectedProjectId === project._id;

  return (
    <tr
      className={`${styles.row} ${isSelected ? styles["row-selected"] : ""}`}
      onClick={() => selectProject(project._id)}
    >
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
