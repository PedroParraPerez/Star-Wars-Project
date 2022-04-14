import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import CardPlanets from "../component/cardPlanets.js"
import CardStarships from "../component/cardStarships.js"
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
			
			<h2>Personajes</h2>
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
				<h2>Naves</h2>
        {store.starshipshome.map((starships, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}><CardStarships uid={starships.uid} title={starships.name}/></div>	
				)
			})}
				<h2>Planetas</h2>
      
      			{store.planetshome.map((planets, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}><CardPlanets uid={planets.uid} title={planets.name}/></div>	
				)
			})}
			</div>
		</div>
	</div>
)};
