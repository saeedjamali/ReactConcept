import { MdFace } from "react-icons/md";
import { MdFace2 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";


function CharacterReview({ character, addTooFavorite, isFavorite }) {
    // console.log("character review :", character);
    return (
        <div className="flex bg-slate-600 rounded-md mt-2 ">
            <div>
                <img src={character.image} className="w-48 h-48 rounded-l-md" />
            </div>
            <div className="pl-4" >
                <div className='flex-1 h-20 p-2 text-white flex flex-col justify-around '>
                    <div className='flex items-center justify-start'>
                        <span className='mr-1'>{character.gender == "Male" ? <MdFace /> : <MdFace2 />}</span>
                        <span className='font-bold'>{character.name}</span>
                    </div>
                    <div className='flex items-center justify-start'>
                        <span className={`mr-1 ${character.status == "Dead" ? "text-red-500" : "text-green-500"} `}><GoDotFill /></span>
                        <span className='text-[12px]'>{character.status} - {character.species}</span>
                    </div>
                </div>
                <div className="flex flex-col ml-4 ">
                    <span className="text-gray-400 text-base">Last known location:</span>
                    <span className="font-bold text-sm">{character.location.name}</span>
                </div>
                {isFavorite ? <span className="block text-red-300 font-normal text-sm ring-red-300 ring-2 rounded-xl p-2 ml-4 mt-4">Added to Favorite </span> : <button className="text-white font-normal text-sm bg-slate-400 rounded-xl p-2 ml-4 mt-4" onClick={() => addTooFavorite(character)}>Add to Favorite</button>}


            </div>


        </div>
    )
}

export default CharacterReview