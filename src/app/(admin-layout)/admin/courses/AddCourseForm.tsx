"use client";
import { createNewCourse } from "@/actions/courses";
import styles from "./styles.module.css";

export default function AddCourseForm({
  subjects,
}: {
  subjects: { id: number; name: string }[];
}) {
  async function handleSubmit(formData: FormData) {
    const result = await createNewCourse(formData);
    if (result.success) {
      alert("Course created successfully");
      (document.getElementById("courseForm") as HTMLFormElement).reset();
    }
  }

  return (
    <form id="courseForm" action={handleSubmit} className={styles.form}>
      <div className={styles.formGrid}>
        <div>
          <label htmlFor="course_title">Course Title</label>
          <input type="text" name="course_title" id="course_title" required />
        </div>

        <div>
          <label htmlFor="course_type">Course Type</label>
          <select name="course_type" id="course_type" required>
            <option value="UNDERGRADUATE">Undergraduate</option>
            <option value="POSTGRADUATE">Postgraduate</option>
          </select>
        </div>

        <div>
          <label htmlFor="course_subject_id">Subject</label>
          <select name="course_subject_id" id="course_subject_id" required>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="course_award_name">Award Name</label>
          <input
            type="text"
            name="course_award_name"
            id="course_award_name"
            required
          />
        </div>

        <div>
          <label htmlFor="ucas_code">UCAS Code</label>
          <input
            type="text"
            name="ucas_code"
            id="ucas_code"
            required
            maxLength={4}
          />
        </div>

        <div>
          <label htmlFor="ucas_points">UCAS Points</label>
          <input type="number" name="ucas_points" id="ucas_points" />
        </div>

        <div>
          <label htmlFor="year_of_entry">Year of Entry</label>
          <input type="text" name="year_of_entry" id="year_of_entry" required />
        </div>

        <div>
          <label htmlFor="mode_of_attendance">Mode of Attendance</label>
          <select name="mode_of_attendance" id="mode_of_attendance" required>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
          </select>
        </div>

        <div>
          <label htmlFor="study_length">Study Length</label>
          <input type="text" name="study_length" id="study_length" required />
        </div>

        <div>
          <label htmlFor="course_summary">Summary</label>
          <textarea name="course_summary" id="course_summary" required />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="has_foundation_year"
              value="true"
              defaultChecked={false}
            />
            Has Foundation Year
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="no_longer_recruiting"
              value="true"
              defaultChecked={false}
            />
            No Longer Recruiting
          </label>
        </div>
      </div>

      <div className={styles.formActions}>
        <button type="submit">Create Course</button>
      </div>
    </form>
  );
}
