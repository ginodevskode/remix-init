import NewNote, {
  links as newNoteLinks,
} from "app/components/newNotes/newNotes";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];
}
