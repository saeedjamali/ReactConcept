function Nav() {
    return (
        <nav className="flex sm:flex-row flex-col justify-around w-full min-h-8 bg-stone-600 items-center p-2 sm:gap-4   ">
            <a className="nav-items" href="">All</a>
            <a className="nav-items" href="">Active</a>
            <a className="nav-items" href="">Complete</a>
            <a className="nav-items" href="">Upcoming</a>

        </nav>

    );
}

export default Nav;