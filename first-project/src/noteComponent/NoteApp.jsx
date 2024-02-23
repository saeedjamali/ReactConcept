
import AddNewNote from "./AddNewNote";
import { useState } from "react";
import NoteList from "./NoteList"
export default function NoteApp() {
    const [notes, setNewNotes] = useState([]);
    const handleDeleteNote = (id) => {
        console.log(notes);
        const filteredNotes = notes.filter((note) => note.id != id);
        setNewNotes(filteredNotes);
        console.log(filteredNotes);
    };


    const handleCompleteNote = (e) => {
        const noteId = Number(e.target.value);
        console.log(noteId);
        const newNotes = notes.map((note) => note.id == noteId ? { ...note, completed: !note.completed } : note);
        console.log(newNotes);
        setNewNotes(newNotes);
    };

    return (
        <div className="container mx-auto bg-gray-200 rounded-b-md">
            <header className="flex w-full items-center justify-around h-24 bg-slate-300 rounded-b-md">
                <div>
                    <span className="font-semibold text-3xl">My Notes (0)</span>
                </div>
                <div>
                    <div>
                        <select className="px-4 py-1 border-2 rounded-md text-lg" name="selectedFruit">
                            <option value="apple">Sort Based On latest</option>
                            <option value="banana">Sort Based On Completed</option>
                            <option value="orange">Sort Based On Earliest </option>
                        </select>

                    </div>
                </div>
            </header>
            <section >
                <div className="grid grid-cols-3 gap-3">
                    <div className="add-new-note col-span-1 gap-3 p-4 space-y-3 flex flex-col items-center ">
                        <AddNewNote setNewNotes={setNewNotes} />
                    </div>
                    <div className="col-span-2 gap-3 ">
                        <NoteList notes={notes} onDelete={handleDeleteNote} onCompleteNote={handleCompleteNote} />
                    </div>
                </div>
            </section>

        </div>
    );




}