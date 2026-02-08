"use client";
import Image from "next/image";
import { UserHeaderInfo } from "./UserHeaderInfo";
import styles from "@/app/styles/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <img src="/logo.webp" alt="" className={styles.logo} />
        <span className="sr-only">Spybee</span>
      </h1>

      <UserHeaderInfo />
    </header>
  );
}
