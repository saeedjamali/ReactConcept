import React from 'react'
import AppFooter from './AppFooter'
import { Outlet } from 'react-router'
import AppNav from './AppNav'

function Layout() {
    return (
        <div>
            <AppNav />
            <Outlet />
            <AppFooter />
        </div>
    )
}

export default Layout