import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import corazon from"../../img/corazon.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" id="fondoNavbar">
			<Link to="/">
					<img className="navbar-brand mb-0 h1" src="https://www.seekpng.com/png/full/10-105590_star-wars-logo-png-star-wars-png.png" alt="logo Star Wars Blog" id="logoNavbar"/>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
  						<button className="btn btn-dark dropdown-toggle" toggle="dropdown"><img className="favHearth" src={corazon} /></button>
							<ul className="dropdown-menu">
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
							</ul>
					</div>
			</div>
		</nav>
	);
};
{/* <div className="listaFav">
						<ul className="listaFav">
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
						</ul>			
					</div>	 */}