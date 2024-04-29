import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import NoteList, { links as noteListLinks } from "~/components/notes/noteList";
import { links as newNoteLinks } from "~/components/newNotes/newNotes";
import { getStoredNotes } from "~/data/note";

export default function List() {
  const notes = useLoaderData();
  const navigate = useNavigate();
  return (
    <main>
      <Link onClick={() => navigate(-1)}>
        <i className="material-icons">chevron_left</i>
      </Link>
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  if (!notes || notes.length === 0) {
    throw json(
      { message: "Could not find any notes." },
      {
        status: 404,
        statusText: "Not Found",
      }
    );
  }
  return notes;
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
