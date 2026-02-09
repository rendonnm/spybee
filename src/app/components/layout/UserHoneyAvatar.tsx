import styles from "@/app/styles/table.module.css";
import { HexagonIcon } from "@/app/components/icons/HexagonIcon";

interface UserHoneyNameProps {
  value: string;
}

export function UserHoneyName({ value }: UserHoneyNameProps) {
  return (
    <div className={styles.honey}>
      <HexagonIcon stroke="white" strokeWidth={4} />
      <span>{value}</span>
    </div>
  );
}
