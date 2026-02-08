import { ProjectHeader } from "./components/ProjectHeader";
import rawProjects from "@/app/_data/mock_data.json";
import { ProjectRow } from "./components/ProjectRow";
import { Project } from "./types/project";
import styles from "@/app/styles/table.module.css";

export default async function Home() {
  const projects = rawProjects as Project[];
  return (
    <>
      <ProjectHeader />
      <section className={styles.container}>
        <table>
          <caption className="sr-only">Proyectos de Spybee</caption>
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Plan</th>
              <th>Estado</th>
              <th>Equipo</th>
              <th>Items por vencer</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return <ProjectRow key={project._id} project={project} />;
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
