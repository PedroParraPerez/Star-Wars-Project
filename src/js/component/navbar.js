import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" id="fondoNavbar">
			<Link to="/">
					<img className="navbar-brand mb-0 h1" src="https://www.seekpng.com/png/full/10-105590_star-wars-logo-png-star-wars-png.png" alt="logo Star Wars Blog" id="logoNavbar"/>
			</Link>
			<div className="ml-auto">
				<Link to="">
					<button className="btn btn-primary" id="buttonNav">Mis Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
