import Projects from "@/components/Projects/project";
import styles from "./projectMy.module.css";

export default function MyProjects  ()  {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.content}>
      <Projects />
    </div>
    </main>
  )
};