import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/NavBar.module.css";

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : undefined)}>Shop</NavLink>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? styles.active : undefined)}>Admin Portal</NavLink>
        </nav>
	);
};

export default NavBar;