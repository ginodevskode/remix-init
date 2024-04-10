import fs from "fs/promises";

/*reads the contents of the 'notes.json' file asynchronously using fs.readFile() and await. 
It then parses the raw file content as JSON using */

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

//takes an array of notes as input and writes it to the 'notes.json' file asynchronously using fs.writeFile()
export function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
