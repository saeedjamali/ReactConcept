import React from 'react'
import CharacterReview from './CharacterReview'
import EpisodList from './EpisodList'
import {episodes } from '../../data/data'

function CharacterDetail({character}) {
  return (
    <div>
      <CharacterReview character={character}/>
      <EpisodList episodes ={episodes} />
    </div>
  )
}

export default CharacterDetail