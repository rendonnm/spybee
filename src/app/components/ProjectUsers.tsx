import { User } from "../types/project";
import { UserHoneyName } from "./UserHoneyAvatar";
import styles from "@/app/styles/table.module.css";

interface ProjectUsersProps {
  mainUsers: User[];
  otherUsers: User[];
}

export function ProjectUsers({ mainUsers, otherUsers }: ProjectUsersProps) {
  return (
    <div className={styles.users}>
      {mainUsers.length > 0 &&
        mainUsers.map((user) => {
          const key = `${user.name}-${user.lastName}`;

          const nameFirstLetter = user.name[0] ?? "";
          const lastNameFirstLetter = user.lastName[0] ?? "";

          const initials = `${nameFirstLetter} ${lastNameFirstLetter}`;

          return <UserHoneyName key={key} value={initials} />;
        })}
      {otherUsers.length > 0 && (
        <UserHoneyName value={`+${otherUsers.length}`} />
      )}
    </div>
  );
}
