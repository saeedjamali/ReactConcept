import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function useCharacter(searchInput) {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);

    useEffect(() => {
        setIsLoading(true);

        //* CleanUp Function : S06-E16

        const controller = new AbortController();
        const signal = controller.signal;

        //* Solution 1 for input Search
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`, { signal })
            .then((res) => {
                // console.log("Start Axios : ", res);

                //* Solution 2 for input Search
                // const result = res.data.results;
                //const filteredItem = results.filter((ch) => ch.name.toLowerCase().includes(searchInput));
                setCharacters(res.data.results);
                // console.log("char[0]", characters[0]);

                // setFilteredCharacters(res.data.results);
            })
            .catch((err) => toast.error(err.response.data.error))
            .finally(() =>
                setIsLoading(false)
            );

        return () => {
            controller.abort();
        }

    }, [searchInput]);

    return { isLoading, characters }
}

export default useCharacter