import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.js"
import { Context } from "../store/appContext";


export const Home = () => {

	const {store,actions} = useContext(Context);
	const [isFav, setIsFav] = useState(false);
	const [listFav, setListFav] = ([]);

	 const favorites = (uid) => {
		isFav == false ? setIsFav(true) : setIsFav(false);
		console.log(isFav)
		
	 }

	const addToFav = () => {
		setListFav
	}
	 
		


return(
	<div className="Container-fluid">
		<div className="text-center mt-5">
			<div className="img-header">
				<img  className="imgHeader" src="https://media.discordapp.net/attachments/939128267607257158/940244671056211968/Ilustracion_sin_titulo.jpg" alt="StarWars"/>
			</div>
			
			<h1>Personajes</h1>
			<div className="row cardlistpeople">
				{store.peoplehome.map((people, index)=> {
					return(
						<div className="col-md-3 d-flex justify-content-center" key={index}>
							<CardPeople 
							title={people.name} 
							uid={people.uid}
							fav={()=>{favorites()}}
							/>
						</div>	
					)
				})}
			</div>
		</div>
	</div>
)};
