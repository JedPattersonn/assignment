-- CreateEnum
CREATE TYPE "CourseType" AS ENUM ('UNDERGRADUATE', 'POSTGRADUATE');

-- CreateEnum
CREATE TYPE "ModeOfAttendance" AS ENUM ('FULL_TIME', 'PART_TIME');

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "course_title" TEXT NOT NULL,
    "course_type" "CourseType" NOT NULL,
    "course_summary" TEXT NOT NULL,
    "course_award_name" TEXT NOT NULL,
    "ucas_code" TEXT NOT NULL,
    "ucas_points" INTEGER,
    "year_of_entry" TEXT NOT NULL,
    "mode_of_attendance" "ModeOfAttendance" NOT NULL,
    "study_length" TEXT NOT NULL,
    "has_foundation_year" BOOLEAN NOT NULL,
    "course_subject_id" INTEGER NOT NULL,
    "no_longer_recruiting" BOOLEAN NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_course_subject_id_fkey" FOREIGN KEY ("course_subject_id") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
