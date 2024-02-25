
import AddNewNote from "./AddNewNote";
import { useState } from "react";
import NoteList from "./NoteList"
import HeaderNotes from "./HeaderNotes";


export default function NoteApp() {
    const [notes, setNewNotes] = useState([]);
    const [sortBy, setSortBy] = useState("1");

    // console.log(sortBy);

    const handleDeleteNote = (id) => {
        console.log(notes);
        const filteredNotes = notes.filter((note) => note.id != id);
        setNewNotes(filteredNotes);
        console.log(filteredNotes);
    };


    const handleCompleteNote = (e) => {
        const noteId = Number(e.target.value);
        // console.log(noteId);
        const newNotes = notes.map((note) => note.id == noteId ? { ...note, completed: !note.completed } : note);
        console.log(newNotes);
        setNewNotes(newNotes);
    };



    let sortedNotes = notes;
    console.log("SortBy is :", sortBy);
    switch (sortBy) {
        case "1":
            console.log("1");
            sortedNotes = [...notes].sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
            break;
        case "2":
            console.log("2");
            sortedNotes = [...notes].sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1);
            break;
        case "3":
            console.log("3");
            sortedNotes = [...notes].sort((a, b) => (Number(a.completed) < Number(b.completed)) ? 1 : -1);
            break;

    }


// 
return (
    <div className="container mx-auto bg-gray-200 rounded-b-md">
        <HeaderNotes notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <section >
            <div className="grid grid-cols-3 gap-3">
                <div className="add-new-note col-span-1 gap-3 p-4 space-y-3 flex flex-col items-center ">
                    <AddNewNote setNewNotes={setNewNotes} />
                </div>
                <div className="col-span-2 gap-3 ">
                    <NoteList notes={sortedNotes} onDelete={handleDeleteNote} onCompleteNote={handleCompleteNote} />
                </div>
            </div>
        </section>

    </div>
);




}