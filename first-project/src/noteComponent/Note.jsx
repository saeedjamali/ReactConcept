import { FaTrashAlt } from "react-icons/fa";
import { LiaTrashAltSolid } from "react-icons/lia";
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { useState } from "react"


function Note({ note, onDelete, onCompleteNote }) {
    return (
        <div>
            <div className="note note__style ">
                <div className="body w-full flex items-center justify-between border-b-2 border-slate-00">
                    <div className="flex flex-col ">
                        <span className={`"title font-bold" ${note.completed ? "line-through opacity-30" : ""}    `}>
                            {note.title}
                        </span>
                        <span className="desc text-gray-600">{note.description}</span>
                    </div>
                    <div className="flex space-x-4 ">
                        <button className="text-red-400" onClick={() => onDelete(note.id)}><LiaTrashAltSolid /></button>
                        <input type="checkbox" value={note.id} checked={note.completed} onChange={onCompleteNote}></input>
                    </div>
                </div>
                <div className="text-gray-300">
                    {note.createdAt}
                </div>

            </div>

        </div>
    )
}

export default Note