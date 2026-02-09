import styles from "@/app/styles/page.module.css";

interface OptionProps {
  children: React.ReactNode;
}

export function ProjectOption({ children }: OptionProps) {
  return <div className={styles.option}>{children}</div>;
}
