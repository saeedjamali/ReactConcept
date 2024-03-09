import React from 'react'
import { NavLink } from 'react-router-dom'

function AppNav() {
    return (
        <div>
            <nav className='w-full mx-auto bg-white flex items-center justify-center font-mono'>
                <ul className='flex item-center justify-center space-x-8 text-lg font-bold'>
                    <li className='link'><NavLink end to="/home">Home</NavLink></li>
                    <li className='link'><NavLink to="/accordion">Accordion</NavLink></li>
                    <li className='link'><NavLink to="/course">Courses</NavLink></li>
                    <li className='link'><NavLink to="/noteApp">Notes</NavLink></li>
                    <li className='link'><NavLink to="/ricky">RickMorty</NavLink></li>
                    <li className='link'><NavLink to="/stopwatch">Timer</NavLink></li>
                </ul>

            </nav>
        </div>
    )
}

export default AppNav