import styles from "@/app/styles/table.module.css";
import { dateFormater } from "../utils/format";
import { ClockIcon } from "./ClockIcon";
import { ReloadIcon } from "./ReloadIcon";

interface ProjectTitleProps {
  title: string;
  createdAt: string;
  lastUpdated: string;
}

export function ProjectTitle({
  title,
  createdAt,
  lastUpdated,
}: ProjectTitleProps) {
  const createdDate = new Date(createdAt);
  const formattedCreated = dateFormater.format(createdDate);

  const updateDate = new Date(lastUpdated);
  const formattedUpdated = dateFormater.format(updateDate);

  return (
    <div className={styles["title-container"]}>
      <div className={styles.image} />
      <div>
        <p className={styles.title}>{title}</p>
        <footer className={styles.dates}>
          <p>
            <ClockIcon />
            {formattedCreated}
          </p>
          <p>
            <ReloadIcon />
            {formattedUpdated}
          </p>
        </footer>
      </div>
    </div>
  );
}
