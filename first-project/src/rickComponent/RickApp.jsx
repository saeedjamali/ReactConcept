import CharacterDetail from "./CharacterDetail"
import CharacterList from "./CharacterList"
import Navbar from "./Navbar"
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { characterItem } from "../../data/data";
import Modals from "./Modals";
import useCharacter from "../hooks/useCharacter";
import useLocalStorage from "../hooks/useLocalStorage";


function RickApp() {



  const [searchInput, setSearchInput] = useState("");
  const { isLoading, characters } = useCharacter(searchInput);
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const [favorites, SetToFavorites] = useLocalStorage("Favorites", []);
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


  const handleShowModal = () => {
    setOpen(() => !open);
  }

  const handleDeleteFavorite = (id) => {
    const currentFavorites = favorites.filter((fav) => fav.id != id);
    SetToFavorites(currentFavorites);
  }

  return (

    <div className="bg-slate-800 relative">

      <Toaster />

      <div className="container mx-auto">

        <Modals open={open} onOpen={handleShowModal} favorites={favorites} onDeleteFavorites={handleDeleteFavorite} />
        <Navbar numberOfFavorite={favorites.length} characters={characters} onSearchCharacter={(e) => handleSearchCharacter(e)} onShowModal={handleShowModal} />
        <div className="grid grid-cols-6 md:grid-cols-3 gap-4 mt-4">
          <div className="Character__list col-span-6 md:col-span-1 w-full ">
            {/* {console.log("Characters is :", characters)} */}
            {!isLoading ? <CharacterList selectedId={selectedId} characters={characters} onShowReview={handleShowReview} /> : <LoadingPage />

            }
          </div>


          <div className="character__detail col-span-6 md:col-span-2 w-full h-24 ">
            {selectedId ? <CharacterDetail isFavorite={isFavorite} selectedId={selectedId} addTooFavorite={handleAddToFavorite} /> : <div className="bg-slate-100 rounded-md p-2">Please Select a Character..</div>}

          </div>

        </div>
      </div>
    </div>
  )
}

export default RickApp