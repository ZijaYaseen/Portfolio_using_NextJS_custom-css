import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          {/* Footer Logo or Name */}
          <div className={styles.footerLogo}>
            <h2 className={styles.footerHeading}>Zija <span className={styles.textPurple}> Yaseen</span> </h2>
            <p className={styles.footerParagraph}>
              Web Developer & Designer. Let&apos;s build something great together!
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.links}>
              Home
            </Link>
            <Link href="/AboutMe" className={styles.links}>
              About
            </Link>
            <Link href="/ProjectsMy" className={styles.links}>
              Projects
            </Link>
            <Link href="/Contact" className={styles.links}>
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <Link
              href="https://www.linkedin.com/in/zija-yaseen-0154722b2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/ZijaYaseen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="mailto:zijayaseen15@gmail.com"
              className="hover:text-purple transition"
            >
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contactinfo}>
          <p>
            Contact Me: zijayaseen15@gmail.com
          </p>
          <p>Location: Karachi, Pakistan</p>
        </div>

        {/* Copyright */}
        <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Zija Yaseen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
