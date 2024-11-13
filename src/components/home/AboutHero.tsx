import styles from "./AboutHero.module.css";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p>
            Cantor College was established in 1989 to specialize in Computing
            and Design. At Cantor College, we want to give students the
            education they need to achieve their career aims, leaving them
            equipped with the knowledge, skills and experience to succeed.
          </p>
          <p>
            Cantor College gives you the opportunities that can give you the
            edge when you enter the world of work, through our teaching and our
            links to some of the world&apos;s leading researchers and employers.
            Our students have gone on to successful careers in a wide range of
            industries across the globe.
          </p>
          <p>
            Whatever your ambitions, our learning and support can help to get
            the most out of your time with Cantor College, both as a student and
            in your future career.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-image.jpg"
            alt="Cantor College Campus"
            width={600}
            height={400}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
