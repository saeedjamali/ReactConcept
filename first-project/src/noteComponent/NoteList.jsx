import { useState } from "react"
import Note from "./Note"

function NoteList({ notes, onDelete, onCompleteNote }) {

    return (
        <div className="w-full p-4 space-y-3 flex flex-col items-center justify-center">
            <span className="w-full mt-4 text-1xl font-bold block text-center">No Notes has already been added!</span>
            <div className="w-full">
                <div className="flex items-center justify-between text-base font-light">
                    <span>All <span className="badge--counter">1</span></span>
                    <span>Completed <span className="badge--counter">1</span></span>
                    <span>Open <span className="badge--counter">1</span></span>
                </div>
                <div className="note-container mt-8 space-y-2">
                    {notes.map((note) => < Note key={note.id} note={note} onDelete={onDelete} onCompleteNote={onCompleteNote} />)}
                </div>
            </div>
        </div>
    )
}

export default NoteList
