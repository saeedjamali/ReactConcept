import React from 'react'
import { MdFace } from "react-icons/md";
import { MdFace2 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

function CharacterItem({ character, onShowReview }) {
    return (
        <div className="bg-slate-600 rounded-md flex items-center h-full cursor-pointer mt-2"
            onClick={() => onShowReview(character.id)}>
            <div className='p-2'>
                <img src={character.image} alt="" srcset="" className='w-16 h-16 rounded-md' />
            </div>
            <div className='flex-1 h-20 p-2 text-white flex flex-col justify-around '>
                <div className='flex items-center justify-start'>
                    <span className='mr-1'>{character.gender == "Male" ? <MdFace /> : <MdFace2 />}</span>
                    <span className='font-bold'>{character.name.substring(0,9). concat('...')}</span>
                </div>
                <div className='flex items-center justify-start'>
                    <span className={`mr-1 ${character.status == "Dead" ? "text-red-500" : "text-green-500"} `}><GoDotFill /></span>
                    <span className='text-[12px]'>{character.status} - {character.species}</span>
                </div>
            </div>
            <span className='mr-4 text-red-500 text-2xl'>
                <IoEyeSharp />
            </span>
        </div>
    )
}

export default CharacterItem