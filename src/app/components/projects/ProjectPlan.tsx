import { PLANS } from "@/app/constants/plan";
import styles from "@/app/styles/chip.module.css";

interface ProjectPlan {
  value: string;
}

export function ProjectPlan({ value }: ProjectPlan) {
  const label = PLANS[value as keyof typeof PLANS];

  return (
    <div
      className={`
      ${styles.chip}
      ${value === "big" ? styles.big : ""}
      ${value === "small" ? styles.small : ""}
    `}
    >
      <p>{label}</p>
    </div>
  );
}
