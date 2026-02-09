import { PROJECT_STATUS } from "@/app/constants/status";
import styles from "@/app/styles/chip.module.css";

interface ProjectStatus {
  value: string;
}

export function ProjectStatus({ value }: ProjectStatus) {
  const label = PROJECT_STATUS[value as keyof typeof PROJECT_STATUS];
  return (
    <div
      className={`
      ${styles.chip}
      ${value === "active" ? styles.active : ""}
      ${value === "suspended" ? styles.suspended : ""}
      ${value === "inactive" ? styles.inactive : ""}
      ${value === "pending_payment" ? styles.pending : ""}
    `}
    >
      <p>{label}</p>
    </div>
  );
}
