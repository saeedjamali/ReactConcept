import React, { useEffect, useState } from 'react'
import CharacterReview from './CharacterReview'
import EpisodList from './EpisodList'
import axios from 'axios';
import LoadingPage from "./LoadingPage";
import toast from 'react-hot-toast';

// import {episodes } from '../../data/data'

function CharacterDetail({ selectedId }) {

  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${selectedId}`)
        setCharacter(data);

      } catch (error) {
        toast.error("Not Found...");
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }


    }
    if (selectedId) fetchData();

  }, [selectedId]);


  if (!character) return (<div className='text-white'>No character Selected</div>)


  if (isLoading) return <LoadingPage />
  return (
    <div>
      {/* <LazyLoad > */}
      <CharacterReview character={character} />
      <EpisodList character={character} />
      {/* </LazyLoad> */}
    </div>
  )
}

export default CharacterDetail