import React, { useState } from 'react'
import CharacterItem from './CharacterItem'
import { IoEyeOff, IoEyeSharp } from 'react-icons/io5'

function CharacterList({ characters, onShowReview, selectedId, children }) {




    return (
        <div>
            {
                characters.map((character) => <CharacterItem key={character.id} character={character} onShowReview={onShowReview} selectedId={selectedId}>
                    <span onClick={() => {
                        onShowReview(character.id);
                        // setIsEye(isEye=>!isEye || true);
                    }} className="mr-4 text-green-500 text-xl">
                        {selectedId == character.id ? <IoEyeSharp /> : <IoEyeOff />}
                    </span>
                </CharacterItem>)
            }

        </div>
    )
}

export default CharacterList