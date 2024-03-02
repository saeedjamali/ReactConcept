import CharacterDetail from "./CharacterDetail"
import CharacterList from "./CharacterList"
import Navbar from "./Navbar"
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { characterItem } from "../../data/data";


function RickApp() {


  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState([false]);
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, SetToFavorites] = useState([]);
  // const [isFavorite, SetIsFavorite] = useState(false);




  //! Wrong way Fetch : many renders time unlimited
  //? render login : run code when call function

  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((res)=>res.json())
  //   .then((data)=>setCharacters(data.results));


  //* True way Fetch : useEffect
  //? UseEffect with Async/await and fetch
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch("https://rickandmortyapi.com/api/characters");
  //       if(!res.ok) throw new Error("Something went wrong");
  //       const data = await res.json();
  //       setCharacters(data.results);
  //       setFilteredCharacters(data.results);

  //     } catch (error) {
  //         toast.error(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();

  // }, []);

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

  // useEffect(() => setCharacter(characters[0]), [characters]);


  const handleSearchCharacter = (e) => {
    let searchValue = e.target.value.toLowerCase().trim();
    setSearchInput(searchValue);
    // setFilteredCharacters(filteredItem);
  }


  const handleShowReview = (id) => {
    // const selectedCharater = characters.find((ch) => ch.id == id);
    setSelectedId((prevId) => prevId == id ? null : id);


  }


  const handleAddToFavorite = (character) => {
    SetToFavorites((preFavorite) => [...preFavorite, character]);

  }

  const isFavorite = favorites.some((fav) => fav.id == selectedId);

  // console.log(selectedId);

  // //! run in Everey Rerender
  // console.log("Rerender Component");

  // //! run in Everey Rerender
  // useEffect(() => console.log("Use Effect Run without Dependecy"));

  // //! run in First Rerender
  // useEffect(() => console.log("Use Effect Run First Mount"), []);

  // //! run in Everey state SearchInput changed
  // useEffect(() => console.log("Use Effect Run Input Search changed"), [searchInput]);




  return (

    <div className="bg-slate-800">
      <Toaster />
      <div className="container mx-auto">
        <Navbar numberOfFavorite={favorites.length} characters={characters} onSearchCharacter={(e) => handleSearchCharacter(e)} />
        <div className="grid grid-cols-6 md:grid-cols-3 gap-4 mt-4">
          <div className="Character__list col-span-6 md:col-span-1 w-full ">
            {/* {console.log("Characters is :", characters)} */}
            {!isLoading ? <CharacterList selectedId={selectedId} characters={characters} onShowReview={handleShowReview} /> : <LoadingPage />

            }
          </div>


          <div className="character__detail col-span-6 md:col-span-2 w-full h-24 ">
            {selectedId ? <CharacterDetail isFavorite={isFavorite} selectedId={selectedId} addTooFavorite={handleAddToFavorite} isSetLoading={setIsLoading} /> : <div className="bg-slate-100 rounded-md p-2">Please Select a Character..</div>}

          </div>

        </div>
      </div>
    </div>
  )
}

export default RickApp