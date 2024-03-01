import { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import EpisodeItem from "./EpisodeItem";


function EpisodList({ character }) {
  // const [episode, setEpisode] = useState([]);

  // useEffect(() => {
  //   isSetLoading(true);
  //   axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
  //     .then((res) => {
  //       console.log(res);
  //       setCharacters(res.data.results)
  //     })
  //     .catch((err) => toast.error(err.response.data.error))
  //     .finally(() =>
  //       isSetLoading(false)
  //     );


  // }, []);
  // console.log("Character in Episode List : ", character);
  return (
    <div className="mt-4 bg-slate-600 rounded-md p-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 font-bold text-lg">List of Episodic</span>
        <span className="text-gray-100 "><FaArrowCircleDown /></span>
      </div>
      <div className="mt-8">
        {!character.episode ?<div className='text-white'>No character Selected</div> : character.episode.map((item, index) => (
          <EpisodeItem key={index} index={index} url={item} />
        ))}


      </div>

    </div>
  )
}

export default EpisodList