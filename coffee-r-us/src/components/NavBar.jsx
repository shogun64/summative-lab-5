import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/NavBar.module.css";

const NavBar = () => {
	return (
		<nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/admin">Admin Portal</NavLink>
        </nav>
	);
};

export default NavBar;