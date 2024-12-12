import styles from "./AboutHero.module.css";
import Image from "next/image";

export function AboutHero() {
  return (
    <>
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
              edge when you enter the world of work, through our teaching and
              our links to some of the world&apos;s leading researchers and
              employers. Our students have gone on successful careers in a wide
              range of industries across the globe.
            </p>
            <p>
              Whatever your ambitions, our learning and support can help to get
              the most out of your time with Cantor College, both as a student
              and in your future career.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-image.jpg"
              alt="Cantor College Building"
              width={600}
              height={400}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.coursesSection}>
        <div className={styles.coursesContainer}>
          <div className={styles.courseCard}>
            <h2 className={styles.sectionTitle}>Computing Courses</h2>
            <p>
              The College offers a range of courses to suit applicants with
              varying backgrounds and educational abilities. At undergraduate
              level, there are single BSc Honours Degree courses in Computing,
              Computer Networks, Software Engineering and Cyber Security with
              Forensics amongst others.
            </p>
            <p>
              The College teaches undergraduate and postgraduate courses in a
              wide range of specialisms, including computer science, software
              development, information systems, networking and software
              engineering. It is at the heart of a passionate computing
              community, including student societies devoted to games
              development, digital forensics and programming.
            </p>
            <p>
              The courses are British Computer Society accredited and are highly
              relevant to modern industry. They are designed to prepare students
              for professional occupations in Computing and related fields. Many
              graduates continue their studies to pursue a higher degree such as
              an MSc. or PhD.
            </p>
          </div>

          <div className={styles.courseCard}>
            <h2 className={styles.sectionTitle}>Design Courses</h2>
            <p>
              The College is an internationally connected creative community of
              diverse disciplines housed under one roof. We shape our
              students&apos; futures, preparing them to shape the world through
              applied knowledge and creativity.
            </p>
            <p>
              The College&apos;s art and design courses don&apos;t just train
              you, they promote alternative ways of thinking, making and
              communicating; they provide you with space, tools and inspiration
              to develop your creative practice and a clear career path.
              You&apos;ll get expert teaching from active practitioners and
              researchers who will encourage you to adopt innovative and
              resourceful approaches that both perceive and create opportunities
              for better lives.
            </p>
            <p>
              You&apos;ll develop your creative practice whilst interacting with
              your peers in well-equipped studios, making and digital workshops.
              At the same time, you&apos;ll learn professional skills by working
              on applied briefs facilitated through our links with commercial
              clients, cultural institutions, businesses and organisations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
