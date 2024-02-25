import { IoLogoApple } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


function Navbar({ characters, onSearchCharacter }) {
    return (
        <div className="w-full h-16 flex item-center justify-between bg-slate-500 p-4 rounded-md mt-4 ">
            <span className="text-white text-2xl"><IoLogoApple /></span>
            <input type="text" className="rounded-md px-2 py-1 bg-slate-300 text-slate-800 outline-none" placeholder="search ..." onChange={onSearchCharacter} />
            <span>Found <span className="font-bold underline">{characters.length}</span> Results</span>
            <div className="relative">
                <span className="text-red-600 text-3xl"><FaRegHeart /></span>
                <span className="absolute top-[-5px] right-[-5px] bg-red-400 text-white  text-[10px] rounded-full h-5 w-5 font-bold flex items-center justify-center">13</span>
            </div>
        </div>
    )
}

export default Navbar