import React, { useEffect } from "react";
import { Spotlight } from '../ui/Spotlight';
import Typed from "typed.js";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';
import model from "../../../public/homeModel.png"
import Link from 'next/link';
import styles from "@/components/Hero/Hero.module.css"

const Hero = () => {

    useEffect(() => {
      // Initialize the typing effect
      const options = {
        strings: ["Frontend Web Developer", "React.js Enthusiast", "TypeScript Expert", "UI/UX Designer"], // Words to type
        typeSpeed: 100, // Typing speed in milliseconds
        backSpeed: 60, // Backspacing speed in milliseconds
        loop: true, // Whether to loop through the words
      };
  
      // Create Typed instance
      const typed = new Typed(".typing", options);
  
      // Cleanup function to destroy Typed.js instance on component unmount
      return () => {
        typed.destroy();
      };
    }, []); // Empty dependency array to ensure this effect runs only once when the component mounts
  
  return (
    <div className={styles.mainContainer}>
      <div>
        <Spotlight className={styles.spotlightWhite} fill='white' />
        <Spotlight className={styles.spotlightPurple} fill='purple' />
        <Spotlight className={styles.spotlightBlue} fill='blue' />
      </div>
      {/* background dot and grid ui from Aceternity*/}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
   {/* content  */}
      <div className={styles.contentSection}>
        <div className={styles.subContent}>
          <h2 className={styles.title}>
            Dynamic Web Experiences with Next.js
          </h2>
          <h1 className={styles.nameHeading}>
            Hey, I&apos;m <span className={styles.purpleText}>Zija Yaseen</span>
          </h1>
            <h2 className={styles.titleHeading}>
            <span>A </span>
            <span className="typing"></span>
            </h2>
            <p className={styles.paragraph}>
            Turning visions into interactive digital realities, I build responsive, high-performance web applications with Next.js. My focus is on delivering seamless, user-centric designs that enhance engagement and functionality. Blending creativity with technical precision, I ensure each project is both visually appealing and efficient. I’m passionate about transforming ideas into impactful digital experiences.
          </p>
          <div className={styles.buttons}>
            <Link href={"/projects"}>
              <MagicButton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>

            <Link href="/zija_resume.pdf" download="Zija_CV.pdf">
              <button className={styles.resumeButton}>
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image src={model} alt='image' width={2000} className={styles.modelImage}></Image>
        </div>
      </div>
    </div>
  )
}

export default Hero