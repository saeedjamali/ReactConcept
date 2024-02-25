import { useState } from "react"


function HeaderNotes({ notes, sortBy, onSort }) {




    return (
        <div>
            <header className="flex w-full items-center justify-around h-24 bg-slate-300 rounded-b-md">
                <div>
                    <span className="font-semibold text-3xl">My Notes ({notes.length})</span>
                </div>
                <div>
                    <div>
                        <select value={sortBy} className="px-4 py-1 border-2 rounded-md text-lg" name="selectedFruit" onChange={onSort}>
                            <option value="1">Sort Based On latest</option>
                            <option value="2">Sort Based On Earliest</option>
                            <option value="3">Sort Based On Completed </option>
                        </select>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderNotes