import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "app/styles/routes-styles/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">go to notes</Link>
      </p>
    </main>
  );
}

//function that provides an array of objects representing links to stylesheets only for homepage
export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
