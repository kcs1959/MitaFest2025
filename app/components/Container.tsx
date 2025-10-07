import type { ReactNode } from "react";
import styles from "@/app/styles/Container.module.css";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
