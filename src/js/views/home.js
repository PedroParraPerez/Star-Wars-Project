import React, { useContext } from "react";
import "../../styles/home.css";
import CardStarships from "../component/cardStarships.js"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store,actions} = useContext(Context);

return(
	<div className="Container-fluid">
	<div className="text-center mt-5">
		<div className="img-header">
			<img  className="imgHeader" src="https://media.discordapp.net/attachments/939128267607257158/940244671056211968/Ilustracion_sin_titulo.jpg" alt="StarWars"/>
		</div>

		
		<h1>Naves</h1>
		<div className="row cardlistpeople">
			{store.starshipshome.map((starships, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}><CardStarships uid={starships.uid} title={starships.name}/></div>	
				)
			})}
		</div>
	
		

		
	</div>
	</div>
)};
