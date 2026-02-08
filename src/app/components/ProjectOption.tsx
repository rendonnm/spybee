import styles from "@/app/styles/page.module.css";

interface OptionProps {
  value: string;
}

export function ProjectOption({ value }: OptionProps) {
  return <button className={styles.option}>{value}</button>;
}
