let notes = [{ id: 1, text: "First note" }];

export function getNotes() {
  return notes;
}

export function addNote(text) {
  notes.push({ id: Date.now(), text });
}
