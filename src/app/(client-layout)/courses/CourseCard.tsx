import type { Course, Subject } from "@prisma/client";
import styles from "./CourseCard.module.css";
import Link from "next/link";

export function CourseCard({
  course,
}: {
  course: Course & { course_subject: Subject };
}) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className={styles.courseCard}>
        <h3>{course.course_title}</h3>
        <p>{course.course_subject.name}</p>
      </div>
    </Link>
  );
}
