import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function EpisodeItem({ url, index }) {
    const [episode, setEpisode] = useState(null);


    useEffect(() => {

        async function fetchData() {
            try {
                const { data } = await axios.get(url);
                setEpisode(data);
                console.log(data);
            } catch (error) {
                toast.error("Not access to episode");
            }
        }
        fetchData();

    }, []);
    // console.log(url);


    if(episode)
    return (
        <div>

            <div key={episode.id} className="flex items-center justify-between mt-4">
                <span className="text-gray-200">{String(index+1).padStart(2, "0")} - {episode.episode}: <span className="font-bold">{episode.name}</span></span>
                <span className="text-white bg-gray-500 rounded-xl font-normal text-sm p-1">{episode.air_date}</span>
            </div>
        </div>
    )
}

export default EpisodeItem