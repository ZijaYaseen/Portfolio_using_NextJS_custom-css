import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid"
import Image from "next/image";
import aboutImage from "../../../public/about.png";
import styles from "./About.module.css"

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h1 className={styles.mainHeading}>
        About <span className={styles.textPurple}> Me</span>
      </h1>

      <div className={styles.imageContainer}>
  <div className={styles.aboutImage}>
    <Image
      src={aboutImage}
      alt="About Me"
      width={570}
      height={650}
      className={styles.Image}
    />
  </div>

  <div className={styles.contentContainer}>
    <p className={styles.content}>
      <span className={styles.textPurple}>» </span> I am an enthusiastic <span className={styles.textPurple}>Computer Science</span> undergraduate from <span className={styles.textPurple}>Virtual University</span> of Islamabad, passionate about harnessing the power of technology to create impactful solutions.
    </p>

    <p className={styles.content}>
      <span className={styles.textPurple}>» </span> My journey revolves around continuous learning and experimenting with emerging technologies. I find joy in solving complex problems and am always eager to explore new domains and skills. 💡
    </p>

    <p className={styles.content}>
      <span className={styles.textPurple}>» </span> Right now, I am sharpening my <span className={styles.textPurple}>Frontend</span> and <span className={styles.textPurple}>Backend Development</span> skills and diving into the world of modern tech. I am also seeking <span className={styles.textPurple}>Web Development</span> and <span className={styles.textPurple}>UI/UX Design</span> roles that challenge and expand my capabilities.
    </p>

    <p className={styles.content}>
      <span className={styles.textPurple}>» </span> When it comes to building products, I am driven by my love for <span className={styles.textPurple}>HTML/CSS</span> and modern <span className={styles.textPurple}>TypeScript</span> & <span className={styles.textPurple}>JavaScript</span> libraries like <span className={styles.textPurple}>React.js</span>, crafting intuitive, high-performance web applications.
    </p>
  </div>
</div>


      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutMe;
