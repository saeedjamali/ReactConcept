import React from 'react'
import RickMorty from "./RickMorty"
import Timer from "./Timer"
import Notes from "./Notes"
import AccordionP from './AccordionP'
import Course from './Course'
import Home from './Home'
import Layout from '../component/Layout'
import { Route, Routes } from 'react-router'
import Payment from '../component/Payment'
import Profile from '../component/Profile'
import Post from '../component/Post'


function App() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="home/:id" element={<Post />} ></Route>
                    <Route path='home' element={<Home />} >

                        <Route index element={<Profile />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="Payment" element={<Payment />} />
                    </Route>
                    <Route path="stopwatch" element={<Timer />} />
                    <Route path="course" element={<Course />} />
                    <Route path="accordion" element={<AccordionP />} />
                    <Route path="noteApp" element={<Notes />} />
                    <Route path="ricky" element={<RickMorty />} />
                </Route>

            </Routes>

        </div>


    )
}

export default App