import { getNotes } from "@/lib/db";
import AddNote from "./AddNote.jsx";

export default function NotesPage() {
  const notes = getNotes(); // server component = fresh data on request

  return (
    <div>
      <h1>Notes</h1>
      <AddNote />
      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
