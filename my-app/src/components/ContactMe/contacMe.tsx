import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import styles from "./contactMe.module.css"

export default function ContactSection() {
    return (

        <section className={styles.contactSection}>

                {/* Left Section - Contact Details */}
                <div className={styles.contactdetails}>
                    <h2 className={styles.heading}>Let&apos;s <span className={styles.textPurple}> Connect </span> with Me</h2>
                    <p className={styles.paragraph}>
                        Excited to bring ideas to life? Let&apos;s collaborate! Whether it&apos;s an innovative project, a creative concept, or a vision you&apos;d like to shape, I&apos;m here to connect and contribute.
                        Feel free to reach out. Let&apos;s create something extraordinary together!.
                    </p>

                    <div className={styles.socialLinks}>
                        <div className={styles.links}>
                            <FaEnvelope size={32} />
                            <Link href="mailto:zijayaseen15@gmail.com">
                                <span className={styles.link}>zijayaseen15@gmail.com</span>
                            </Link>
                        </div>
                        <div className={styles.links}>
                            <FaLinkedin size={32} />
                            <Link
                                href="https://www.linkedin.com/in/zija-yaseen-0154722b2"
                                target="_blank"
                                rel="noreferrer"
                            > 
                            <span className={styles.link}>Connect with me on LinkedIn</span>
                                
                            </Link>
                        </div>
                        <div className={styles.links}>
                            <FaGithub size={32} />
                            <Link
                                href="https://github.com/ZijaYaseen"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={styles.link}>Let&apos;s collaborate on GitHub</span>
                                
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className={styles.contactForm}>
                    <h2 className={styles.formHeading}>
                        Contact Me
                    </h2>
                    <form action={"mailto:zijayaseen15@gmail.com"} method="post" className={styles.formdetails}>
                        <div>
                            <label className={styles.FormInputText}>
                                Name
                            </label>
                            <input
                                type="text"
                                className={styles.inputField}
                                placeholder="Your Name"
                            />

                        </div>
                        <div>
                            <label className={styles.FormInputText}>
                                Email
                            </label>
                            <input
                                type="email"
                                className={styles.inputField}
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className={styles.FormInputText}>
                                Message
                            </label>
                            <textarea
                                rows={4}
                                className={styles.inputField}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
           
        </section>
    );
}
