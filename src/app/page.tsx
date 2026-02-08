"use client";
import { ProjectHeader } from "./components/ProjectHeader";
import { Projects } from "./components/Projects";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  return (
    <>
      <ProjectHeader handleSearch={handleSearch} searchValue={searchValue} />
      <Projects searchValue={searchValue} />
    </>
  );
}
