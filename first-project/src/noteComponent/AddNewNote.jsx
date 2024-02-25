import { useState } from "react"




function AddNewNote({ setNewNotes }) {
    const [title, setTitle] = useState("");
    const [description, SetDescription] = useState("");
    //    const {setNewNotes} =props;


    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const handleAddNewNote = (e) => {
        e.preventDefault();
        const newNote = {
            title, description, id: Date.now(), completed: false, createdAt: new Date().toLocaleDateString("en-US", options),
        }

        if (!title || !description) return;
        setTitle("");
        SetDescription("");
        console.log(newNote);
        setNewNotes((notes) => [...notes, newNote]);

    }
    return (
        <div>
            <span className="w-full mt-4 text-1xl font-bold block text-center">Add New Note</span>
            <form onSubmit={(e) => handleAddNewNote(e)}>
                <input  className="input__text" type="text" autoFocus  placeholder="Note Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="input__text" type="text" placeholder="Note Description" value={description} onChange={(e) => SetDescription(e.target.value)} />
                <button className="btn__submit" onClick={(e) => handleAddNewNote(e)} >Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote