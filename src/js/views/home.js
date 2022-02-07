import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card.js"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store,actions} = useContext(Context);

return(
	<div className="Container-fluid">
	<div className="text-center mt-5">
		<div className="img-header">
			<img src="https://areajugones.sport.es/wp-content/uploads/2015/08/star-wars-mobile-game-header.jpg"/>
		</div>

		<h3>Planets</h3>

		<div className="row cardlistpeople">
			{store.planetshome.map((planet, index)=> {
				return(
					<div className="col-md-3 d-flex justify-content-center" key={index}><Card title={planet.name}/></div>	
				)
			})}
			{/* <div className="col-md-3 d-flex justify-content-center"><Card/></div> */}
		</div>
	
		

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	</div>
)};
