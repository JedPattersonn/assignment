import { prisma } from "@/lib/db";
import styles from "./course.module.css";

export default async function CoursePage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const course = await prisma.course.findUnique({
    where: { id: parseInt(id) },
    include: {
      course_subject: true,
    },
  });

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{course.course_title}</h1>
      <p className={styles.summary}>{course.course_summary}</p>

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h2>Course Type</h2>
          <p>
            {course.course_type === "UNDERGRADUATE"
              ? "Undergraduate"
              : "Postgraduate"}
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>Subject Area</h2>
          <p>{course.course_subject.name}</p>
        </div>

        {course.ucas_code && (
          <div className={styles.infoCard}>
            <h2>UCAS Code</h2>
            <p>{course.ucas_code}</p>
          </div>
        )}

        {course.ucas_points && (
          <div className={styles.infoCard}>
            <h2>UCAS Points</h2>
            <p>{course.ucas_points}</p>
          </div>
        )}

        <div className={styles.infoCard}>
          <h2>Year of Entry</h2>
          <p>{course.year_of_entry}</p>
        </div>

        <div className={styles.infoCard}>
          <h2>Status</h2>
          <p
            className={`${styles.status} ${
              course.no_longer_recruiting
                ? styles.notRecruiting
                : styles.recruiting
            }`}
          >
            {course.no_longer_recruiting
              ? "No longer recruiting"
              : "Recruiting"}
          </p>
        </div>
      </div>
    </div>
  );
}
