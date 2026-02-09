"use client";

import dynamic from "next/dynamic";
import { ProjectHeader } from "./components/projects/ProjectHeader";
import { ProjectTable } from "./components/projects/ProjectTable";

const ProjectMap = dynamic(
  () =>
    import("./components/map/ProjectMap").then((mod) => ({
      default: mod.ProjectMap,
    })),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <ProjectHeader />
      <ProjectMap />
      <ProjectTable />
    </>
  );
}
