/* eslint-disable react/prop-types */
import { redirect } from "@remix-run/node";
import { Link, useRouteError, Outlet, NavLink } from "@remix-run/react";
import notesStyles from "app/styles/routes-styles/notes.css";

import { getStoredNotes, storeNotes } from "../data/note";

export default function NotesPage() {
  return (
    <main className="container">
      <h1>Notes</h1>
      <nav className="navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/notes/list">NoteList</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/notes/create">Create</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
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

export function CatchBoundary() {
  const caughtResponse = useRouteError();

  const message = caughtResponse.data?.message || "Data not found.";

  return (
    <main>
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

export function links() {
  return [{ rel: "stylesheet", href: notesStyles }];
}
