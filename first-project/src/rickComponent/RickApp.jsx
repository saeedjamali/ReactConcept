import CharacterDetail from "./CharacterDetail"
import CharacterList from "./CharacterList"
import Navbar from "./Navbar"
import { allCharacters } from "../../data/data"
import { useState } from "react";
import { characterItem } from '../../data/data';

function RickApp() {

  const [character, setCharacter] = useState(characterItem);
  const [characters, setCharacters] = useState(allCharacters);


  const handleSearchCharacter = (e) => {
    let searchValue = e.target.value.toLowerCase();
    if (searchValue == "") setCharacters(allCharacters);
    const searchCharacters = allCharacters.filter((ch) => ch.name.toLowerCase().includes(searchValue));
    console.log(searchCharacters);
    setCharacters(searchCharacters);
  }


  const handleShowReview = (id) => {
    const selectedCharater = allCharacters.find((ch) => ch.id == id);
    setCharacter(selectedCharater);
  }
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto">
        <Navbar characters={characters} onSearchCharacter={(e) => handleSearchCharacter(e)} />
        <div className="grid grid-cols-6 md:grid-cols-3 gap-4 mt-4">
          <div className="Character__list col-span-6 md:col-span-1 w-full ">
            <CharacterList characters={characters} onShowReview={(id) => handleShowReview(id)} />
          </div>
          <div className="character__detail col-span-6 md:col-span-2 w-full h-24 ">
            <CharacterDetail character={character} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RickApp