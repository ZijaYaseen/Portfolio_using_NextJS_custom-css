import AboutMe from "@/components/About/About"
import styles from "./AboutMe.module.css"

export default function About  ()  {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
      <AboutMe />
    </div>
    </main>
  )
};