import React from 'react';
import { FaReact, FaNodeJs, FaLocationArrow, FaHtml5, FaCss3, } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/Projects/project.module.css"

const projects = [
  {
    title: "Portfolio Website - Built with HTML & CSS",
    description: "Explore my personal portfolio website, designed using HTML and CSS and JavaScript.",
    image: "/project5.png",
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <FaCss3 />, color: '#2965F1' },
      { icon: <SiJavascript />, color: '#F7DF1E' },
    ],
    liveLink: 'https://zijayaseen.github.io/Portfolio/',
  },
  {
    title: "Typescript Node.js & Inquirer CLI Based Projects",
    description: "CLI-based projects built with TypeScript, Node.js, and Inquirer.js, showcasing interactive command-line applications with robust functionality.",
    image: "/project4.jpg",
    techStack: [
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <SiJavascript />, color: '#F7DF1E' },
      { icon: <FaNodeJs />, color: '#8CC84B' },
    ],
    liveLink: 'https://github.com/ZijaYaseen/TypeScript-Node_Projects.git',
  },
  {
    title: "Resume Builder Website",
    description: "Create professional resumes effortlessly with our dynamic and user-friendly resume builder.",
    image: "/project2.png",
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://resume-builder-website-sigma.vercel.app/',
  },
  {
    title: 'Mountain Web Landing Page',
    description: 'Elevate your online presence with stunning designs and seamless digital solutions',
    image: '/project1.png',
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://zijayaseen.github.io/Mountain-Web-Landing-Page/',
  },
  {
    title: 'Calculator - Simple and Efficient',
    description: 'Perform basic and advanced calculations with ease using our intuitive calculator',
    image: '/project3.png',
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://zijayaseen.github.io/Calculator-Using-HTML5-CSS-TypeScript/',
  },
  {
 title: 'iPhone 14 Pro Website - Next.js & Tailwind CSS',
  description: 'A sleek responsive iPhone 14 Pro website built from a Figma design using Next.js, TypeScript and Tailwind CSS.',
  image: '/project6.png',
  techStack: [
    { icon: <FaReact />, color: '#61DAFB' },
    { icon: <SiTypescript />, color: '#3178C6' },
    { icon: <SiTailwindcss />, color: '#38BDF8' },
  ],
  liveLink: 'https://next-js-sunday-07-class-assignment-iphone14-website.vercel.app/',
}, 
{
  title: 'AI Blog Website Built with Next.js & Tailwind CSS',
   description: 'Discover the world of AI through a modern blog built with Next.js, TypeScript, and Tailwind CSS for a fast, responsive experience.',
   image: '/project7.png',
   techStack: [
     { icon: <FaReact />, color: '#61DAFB' },
     { icon: <SiTypescript />, color: '#3178C6' },
     { icon: <SiTailwindcss />, color: '#38BDF8' },
   ],
   liveLink: 'https://ai-blog-website-gold.vercel.app/',
 }, 
];

const Projects = () => {
  return (
    <section className={styles.mainContainer}>
      <h1>
        My{" "}
        <span className={styles.textPurple}>Projects</span>
      </h1>


      <div className={styles.containerBox}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.card}
          >

            <div className={styles.ImageBox}>
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className={styles.cardImage}
              />
            </div>



            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.iconsContainer}>
              {/* Icons Section */}
              <div className={styles.iconsContent}>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={styles.icons}
                    style={{
                      color: tech.color, // Icon Color
                      transform: `translateX(-${idx * 12}px)`, // Overlapping effect
                    }}
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>

              {/* Live Site Section */}
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.links}
              >
                <span className={styles.linkText}>Check Live Site</span>
                <FaLocationArrow size={12} /> 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
