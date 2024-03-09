import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Profile from '../component/Profile'

function Home() {
  return (
    <div>
      <NavLink className="link" to="profile">Profile</NavLink>
      <NavLink className="link" to="payment">Payment</NavLink>
      <Outlet />
    </div>


  )
}

export default Home