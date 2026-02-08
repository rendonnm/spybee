import styles from "@/app/styles/header.module.css";

export function UserHeaderInfo() {
  return (
    <article className={styles["user-info"]}>
      <div className={styles["avatar-container"]}>
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className={styles["hexagon"]}
        >
          <polygon points="50,3 95,25 95,75 50,97 5,75 5,25" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className={styles["user-icon"]}
        >
          <path
            fill="currentColor"
            d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
          />
        </svg>
      </div>

      <div>
        <p className={`bold ${styles["user-name"]}`}>Marco</p>
        <p className={`thin ${styles["user-role"]}`}>Administrador</p>
      </div>
    </article>
  );
}
