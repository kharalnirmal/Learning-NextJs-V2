"use server";

import { addNote } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addNoteAction(formData) {
  const text = formData.get("text");

  try {
    addNote(text);

    // 👇 This tells Next.js:
    // "Bro, refill the data on /notes page."
    // revalidatePath("/notes");
  } catch (error) {
    console.error("Failed to add note:", error);
    throw error;
  }
}
