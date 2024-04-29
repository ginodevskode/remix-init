import { Link, useNavigate } from "@remix-run/react";
import NewNote, {
  links as newNoteLinks,
} from "../components/newNotes/newNotes";

export default function Create() {
  const navigate = useNavigate();

  return (
    <main>
      <Link onClick={() => navigate(-1)}>
        <i className="material-icons">chevron_left</i>
      </Link>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];
}
