"use server";
// import { z } from "zod";
import { cookies } from "next/headers";

export async function adminLogin(
  password: string
): Promise<{ success: boolean }> {
  const cookieStore = await cookies();

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (password === adminPassword) {
    cookieStore.set("is_admin", "true");
    return { success: true };
  } else {
    return { success: false };
  }
}
