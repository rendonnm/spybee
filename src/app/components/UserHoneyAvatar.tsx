import styles from "@/app/styles/table.module.css";

interface UserHoneyNameProps {
  value: string;
}

export function UserHoneyName({ value }: UserHoneyNameProps) {
  return (
    <div className={styles.honey}>
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        stroke="white"
        strokeWidth={4}
      >
        <polygon points="50,3 95,25 95,75 50,97 5,75 5,25" />
      </svg>
      <span>{value}</span>
    </div>
  );
}
