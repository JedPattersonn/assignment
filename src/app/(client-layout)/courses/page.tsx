import { prisma } from "@/lib/db";
import { CourseCard } from "./CourseCard";
import styles from "./styles.module.css";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      course_subject: true,
    },
  });

  return (
    <section>
      <h1 className={styles.pageTitle}>Courses</h1>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
