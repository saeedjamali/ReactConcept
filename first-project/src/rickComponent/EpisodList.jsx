import { useEffect, useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import EpisodeItem from "./EpisodeItem";
import toast from "react-hot-toast";
import axios from "axios";


function EpisodList({ character }) {
  const [episodes, setEpisodes] = useState([]);
  const [sortType, setSortType] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    Promise.all(character.episode.map((url) => {
      return axios.get(url)
        .then((res) => {
          return res.data
        })
    })).then((res) => {
      // console.log("Data is : ", res);
      setEpisodes(res);
    });

  }, []);
  // function fetchData() {
  //   try {

  //     const epidoesFetch = character.episode.map(async (url) => {
  //       const { data } = await axios.get(url);
  //       return data;
  //       // setEpisodes(ep => [...ep, data]);
  //     });
  //     console.log("Episode Fetch :", epidoesFetch);
  //     // setEpisodes(epidoesFetch);
  //   } catch (error) {
  //     toast.error("Not access to episode");
  //   }
  // }
  // fetchData();
  // }, []);
  // return () => {
  //   controller.abort();
  // }

  const handleSort = () => {
    sortType ? episodes.sort((a, b) => (a.air_date > b.air_date) ? 1 : -1) :
      episodes.sort((a, b) => (a.air_date > b.air_date) ? -1 : 1);
    setSortType(s => !s);
  }

  // }, []);
  // console.log("Character in Episode List : ", character);
  return (
    <div className="mt-4 bg-slate-600 rounded-md p-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 font-bold text-lg">List of Episodic {`(${episodes.length})`}</span>
        <span className="text-gray-100 " onClick={handleSort} >{sortType ? <FaArrowCircleUp /> : <FaArrowCircleDown />}</span>
      </div>
      <div className="mt-8">
        {console.log("episodes :", episodes)}
        {!episodes ? <div className='text-white'>No character Selected</div> : episodes.map((episode, index) => (
          <EpisodeItem key={index} episode={episode} index={index} />
        ))}


      </div>

    </div>
  )
}

export default EpisodList