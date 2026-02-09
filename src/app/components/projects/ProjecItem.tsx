import styles from "@/app/styles/table.module.css";

interface ProjectItems {
  title: string;
  quantity: number;
}

export function ProjectItem({ title, quantity }: ProjectItems) {
  return (
    <p className={styles.kpi}>
      {quantity}
      <span>{title}</span>
    </p>
  );
}
