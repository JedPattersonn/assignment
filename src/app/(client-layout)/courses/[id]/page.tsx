import { prisma } from "@/lib/db";

export default async function CoursePage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const course = await prisma.course.findUnique({
    where: { id: parseInt(id) },
  });

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.course_title}</h1>
      <p>{course.course_summary}</p>
    </div>
  );
}
