/* eslint-disable react/prop-types */
import { redirect , json } from "@remix-run/node";
import { Link, useRouteError, useLoaderData, Outlet, useLocation } from "@remix-run/react";

import NewNote, {
  links as newNoteLinks,
} from "../components/newNotes/newNotes";
import NoteList, { links as noteListLinks } from "../components/notes/noteList";
import { getStoredNotes, storeNotes } from "../data/note";

export default function NotesPage() {
  const notes = useLoaderData();
  const {pathname} = useLocation()


  return (
    <main>
      <h1>Notes</h1>
      <NoteList notes={notes} />
      <Link to={`${pathname}/create`}>create note</Link>
      <Outlet />
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

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  if (noteData.title.trim().length < 5) {
    return { message: "Invalid title - must be at least 5 characters long." };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}

export function CatchBoundary() {
  const caughtResponse = useRouteError();

  const message = caughtResponse.data?.message || "Data not found.";

  return (
    <main>
      <NewNote />
      <p className="info-message">{message}</p>
    </main>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <main className="error">
      <h1>An error related to your notes occurred!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}
