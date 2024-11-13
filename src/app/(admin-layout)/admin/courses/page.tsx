import { prisma } from "@/lib/db";
import DeleteCourseButton from "./DeleteCourseButton";
import styles from "./styles.module.css";
import AddCourseForm from "./AddCourseForm";

export default async function AdminCoursePage() {
  // Use Promise.all to concurrently fetch data
  const [courses, subjects] = await Promise.all([
    prisma.course.findMany({
      include: {
        course_subject: true,
      },
    }),
    prisma.subject.findMany(),
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Courses</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Subject</th>
              <th>Summary</th>
              <th>Award Name</th>
              <th>UCAS Code</th>
              <th>UCAS Points</th>
              <th>Year of Entry</th>
              <th>Mode of Attendance</th>
              <th>Study Length</th>
              <th>Foundation Year</th>
              <th>No Longer Recruiting</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.course_title}</td>
                <td>{course.course_type}</td>
                <td>{course.course_subject.name}</td>
                <td>{course.course_summary}</td>
                <td>{course.course_award_name}</td>
                <td>{course.ucas_code}</td>
                <td>{course.ucas_points || "N/A"}</td>
                <td>{course.year_of_entry}</td>
                <td>
                  {course.mode_of_attendance === "FULL_TIME"
                    ? "Full Time"
                    : "Part Time"}
                </td>
                <td>{course.study_length}</td>
                <td>{course.has_foundation_year ? "Yes" : "No"}</td>
                <td>{course.no_longer_recruiting ? "Yes" : "No"}</td>
                <td>
                  <DeleteCourseButton courseId={course.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className={styles.divider} />
      <h2 className={styles.title}>Add New Course</h2>
      <AddCourseForm subjects={subjects} />
    </div>
  );
}
