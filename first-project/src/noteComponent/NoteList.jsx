import { useState } from "react"
import Note from "./Note"
import NoteStatus from "./NoteStatus"

function NoteList({ notes, onDelete, onCompleteNote }) {

    return (
        <div className="w-full p-4 space-y-3 flex flex-col items-center justify-center">

            {notes.length == 0 ? <span className="w-full mt-4 text-1xl font-bold block text-center">No Notes has already been added!</span> : <div className="w-full">
                <NoteStatus notes={notes} />
                <div className="note-container mt-8 space-y-2">
                    {notes.map((note) => < Note key={note.id} note={note} onDelete={onDelete} onCompleteNote={onCompleteNote} />)}
                </div>
            </div> }


        </div>
    )
}

export default NoteList
