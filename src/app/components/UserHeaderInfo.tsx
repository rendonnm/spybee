import styles from "@/app/styles/header.module.css";

export function UserHeaderInfo() {
  return (
    <article className={styles["user-info"]}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p className={`bold ${styles["user-name"]}`}>Marco</p>
        <p className={`thin ${styles["user-role"]}`}>Administrador</p>
      </div>
    </article>
  );
}
