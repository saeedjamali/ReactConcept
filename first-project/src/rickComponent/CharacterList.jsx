import React, { useState } from 'react'
import CharacterItem from './CharacterItem'

function CharacterList({ characters, onShowReview, setIsEye,isEye ,selectedId={selectedId}}) {

    return (
        <div>
            {
                characters.map((character) => <CharacterItem key={character.id} character={character} onShowReview={onShowReview} selectedId={selectedId}/>)
            }

        </div>
    )
}

export default CharacterList