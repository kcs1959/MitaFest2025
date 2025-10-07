import styles from "@/app/styles/MainContent.module.css";
import type { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainContent;
