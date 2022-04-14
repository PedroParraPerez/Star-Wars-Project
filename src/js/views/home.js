import React, { useContext,  useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import Card from "../component/Card.js"

import { Context } from "../store/appContext";


export const Home = () => {

	const {store,actions} = useContext(Context);
	
	 

		
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
							<Card 
							title={people.name} 
							uid={people.uid}
							fav={()=>{actions.favorites(people.name)}}
							rute={"/detailspeople/".concat(people.uid)}
							/>
						</div>	
					)
				})}
				<h2>Naves</h2>
        {store.starshipshome.map((starships, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}>
						<Card 
							title={starships.name} 
							uid={starships.uid}
							fav={()=>{actions.favorites(starships.name)}}
							rute={"/detailsstarships/".concat(starships.uid)}
							/>
					</div>
				)
			})}
				<h2>Planetas</h2>
      
      			{store.planetshome.map((planets, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}>
						<Card 
							title={planets.name} 
							uid={planets.uid}
							fav={()=>{actions.favorites(planets.name)}}
							rute={"/detailsplanets/".concat(planets.uid)}
							/>
					</div>	
				)
			})}
			</div>
		</div>
	</div>
)};
