"use server";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const courseSchema = z.object({
  title: z.string(),
  type: z.enum(["UNDERGRADUATE", "POSTGRADUATE"]),
  summary: z.string(),
  award_name: z.string(),
  ucas_code: z
    .string()
    .max(4, { message: "UCAS Code must be maxiumum 4 characters" })
    .optional(),
  ucas_points: z.number().optional(),
  year_of_entry: z.string(),
  mode_of_attendance: z.enum(["FULL_TIME", "PART_TIME"]),
  study_length: z.string(),
  has_foundation_year: z.boolean(),
  subject_id: z.number(),
  no_longer_recruiting: z.boolean(),
});

interface CreateNewCourseResponse {
  success: boolean;
  error?: string;
}

export async function createNewCourse(
  formData: FormData
): Promise<CreateNewCourseResponse> {
  const structuredFormData = {
    title: formData.get("course_title"),
    type: formData.get("course_type"),
    summary: formData.get("course_summary"),
    award_name: formData.get("course_award_name"),
    ucas_code: formData.get("ucas_code"),
    ucas_points: formData.get("ucas_points")
      ? Number(formData.get("ucas_points"))
      : undefined,
    year_of_entry: formData.get("year_of_entry"),
    mode_of_attendance: formData.get("mode_of_attendance"),
    study_length: formData.get("study_length"),
    has_foundation_year: formData.get("has_foundation_year") === "true",
    subject_id: Number(formData.get("course_subject_id")),
    no_longer_recruiting: formData.get("no_longer_recruiting") === "true",
  };

  const parsedData = await courseSchema.safeParseAsync(structuredFormData);

  if (!parsedData.success) {
    console.error(parsedData.error);
    return { success: false, error: "Failed to parse form data" };
  }

  try {
    const subject = await prisma.subject.findUnique({
      where: {
        id: parsedData.data.subject_id,
      },
    });

    if (!subject) {
      return {
        success: false,
        error: `Subject with ID ${parsedData.data.subject_id} does not exist`,
      };
    }

    await prisma.course.create({
      data: {
        course_title: parsedData.data.title,
        course_type: parsedData.data.type,
        course_summary: parsedData.data.summary,
        course_award_name: parsedData.data.award_name,
        ucas_code: parsedData.data.ucas_code,
        ucas_points: parsedData.data.ucas_points ?? null,
        year_of_entry: parsedData.data.year_of_entry,
        mode_of_attendance: parsedData.data.mode_of_attendance,
        study_length: parsedData.data.study_length,
        has_foundation_year: parsedData.data.has_foundation_year,
        course_subject_id: parsedData.data.subject_id,
        no_longer_recruiting: parsedData.data.no_longer_recruiting,
      },
    });

    revalidatePath("/admin/courses");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "An error occurred while creating the course. Please try again.",
    };
  }
}

export async function deleteCourse(courseId: number) {
  await prisma.course.delete({
    where: {
      id: courseId,
    },
  });

  revalidatePath("/admin/courses");
}
