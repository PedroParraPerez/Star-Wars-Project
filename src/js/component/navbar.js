import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {  } from "react/cjs/react.production.min";
import "../../styles/navbar.css";


import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store,actions} = useContext(Context);
	const [favlist, setFavlist] = useState([]);


	useEffect(()=>{
    setFavlist([...favlist, store.fav])
  },[store.fav])

		
		
	 


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
             {favlist ? favlist.map((fav, index)=>{
              return(
                <li key={index} className="favs_navbar p-2">{fav}</li>
              )
            }) : ""} 
            </ul>
        </div>
      </div>
    </nav>
  );
};
{

}
