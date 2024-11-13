"use client";

import { useTransition } from "react";
import { deleteCourse } from "@/actions/courses";

export default function DeleteCourseButton({ courseId }: { courseId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this course?")) {
          startTransition(() => deleteCourse(courseId));
        }
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
