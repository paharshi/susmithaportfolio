import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Susmitha</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2+ years of experience using React and
          NodeJS. Reach out if you'd like to learn more! React Developer with hands-on
          experience in identifying web-based user interactions along with designing & implementing
          highly responsive user interface components by deploying React concepts. 
          
        </p>
        <a href="mailto:paharshi.madasu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
