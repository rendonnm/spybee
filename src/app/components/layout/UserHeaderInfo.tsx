import styles from "@/app/styles/header.module.css";
import { HexagonIcon } from "@/app/components/icons/HexagonIcon";
import { UserIcon } from "@/app/components/icons/UserIcon";

export function UserHeaderInfo() {
  return (
    <article className={styles["user-info"]}>
      <div className={styles["avatar-container"]}>
        <HexagonIcon className={styles["hexagon"]} />
        <UserIcon className={styles["user-icon"]} />
      </div>

      <div>
        <p className={`bold ${styles["user-name"]}`}>Marco</p>
        <p className={`thin ${styles["user-role"]}`}>Administrador</p>
      </div>
    </article>
  );
}
