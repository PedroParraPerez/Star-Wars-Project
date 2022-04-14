import React, { useContext } from "react";

import { Link } from "react-router-dom";
import "../../styles/navbar.css";


import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store,actions} = useContext(Context);


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
      <div>
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
             {store.favlist.map((fav, index)=>{
              return(
                <li key={index} className="favs_navbar">{fav}</li>
              )
            })} 
            </ul>
        </div>
      </div>
    </nav>
  );
};
{

}
