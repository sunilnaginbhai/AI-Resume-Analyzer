import React from 'react'
import {Link, NavLink} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to={"/"}>
                 <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </NavLink>
            <Link to={"/upload"} className="primary-button w-fit">
              Upload Resume
            </Link>
        </nav>

    )
}
export default Navbar
