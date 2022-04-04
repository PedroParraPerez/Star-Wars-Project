import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import corazon from "../../img/corazon.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light mb-3" id="fondoNavbar">
      <Link to="/">
        <img
          className="navbar-brand mb-0 h1"
          src="https://www.seekpng.com/png/full/10-105590_star-wars-logo-png-star-wars-png.png"
          alt="logo Star Wars Blog"
          id="logoNavbar"
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Favoritos
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="favs_navbar">Action</li>
            <li className="favs_navbar">Another action</li>
            <li className="favs_navbar">Something else here</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
{
  /* <div className="listaFav">
						<ul className="listaFav">
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
							<li className="listaFav"><h2>hola</h2></li>
						</ul>			
					</div>	 */
}
