import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function EpisodeItem({ episode, index }) {
    // console.log(episode);
    // const [episode, setEpisode] = useState(null);
    // const controller = new AbortController();
    // const signal = controller.signal;


    // useEffect(() => {

    //     async function fetchData() {
    //         try {
    //             const { data } = await axios.get(url, { signal });
    //             await setEpisode(data);
    //             setEpisodes((ep => [...ep, data]));
    //             // console.log(data);
    //         } catch (error) {
    //             toast.error("Not access to episode");
    //         }
    //     }
    //     fetchData();
    //     return () => {
    //         controller.abort();
    //     }

    // }, []);
    // console.log(url);


    if (episode)
        return (
            <div>

                <div key={episode.id} className="flex items-center justify-between mt-4">
                    <span className="text-gray-200">{String(index + 1).padStart(2, "0")} - {episode.episode}: <span className="font-bold">{episode.name}</span></span>
                    <span className="text-white bg-gray-500 rounded-xl font-normal text-sm p-1">{episode.air_date}</span>
                </div>
            </div>
        )
}

export default EpisodeItem