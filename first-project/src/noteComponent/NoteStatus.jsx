

function NoteStatus({ notes }) {


    let complecedNote = notes.filter((note)=>note.completed).length;
    let len = notes.length;
    // notes.forEach(note => note.completed ? complecedNote++ : complecedNote);
    return (
        <div>
            <div className="flex items-center justify-between text-base font-light">
                <span>All <span className="badge--counter">{ len}</span></span>
                <span>Completed <span className="badge--counter">{complecedNote}</span></span>
                <span>Open <span className="badge--counter">{len - complecedNote}</span></span>
            </div>
        </div>
    )
}

export default NoteStatus