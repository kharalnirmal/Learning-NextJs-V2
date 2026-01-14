"use client";

import { addNoteAction } from "./action";

export default function AddNote() {
  return (
    <form action={addNoteAction}>
      <input name="text" placeholder="Write note..." />
      <button>Add</button>
    </form>
  );
}
