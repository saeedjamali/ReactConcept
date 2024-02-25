import React, { useState } from 'react'
import CharacterItem from './CharacterItem'

function CharacterList({ characters, onShowReview }) {

    return (
        <div>
            {
                characters.map((character) => <CharacterItem key={character.id} character={character} onShowReview={(id) => onShowReview(id)} />)
            }

        </div>
    )
}

export default CharacterList