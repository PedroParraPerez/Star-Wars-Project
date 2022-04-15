import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsStarships.css";
import { Context } from "../store/appContext";

export  const DetailsStarships = () => {

  
    const {store,actions} = useContext(Context)

    let params = useParams();
    
    
    useEffect( ()=> {
        actions.getStarshipsById(params.uid)
    },[]) 
    
    
    


return(
            <div className="Container-fluid">
            {/* {card} */}
            {store.starshipsDetails.map((detail,index) =>{
                return ( 
             <div className="row" key={index}>
                <div className="col-xl-12 wrapStarships">
                    <div className="col-xl-7 Starshipsbucketimg">
                        <img className="Starshipsphoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </div>
                    <div className="col-xl-5 Starshipsdescription">
                        <ul>
                            <li>Nombre: {detail.name}</li>
                            <li>Tipo de nave: {detail.starship_class}</li>
                            <li>Manufactura: {detail.manufacturer}</li>
                            <li>Costo en créditos: {detail.cost_in_credits}</li>
                        </ul>
                    </div>
                </div>
            </div> 
                )
            })}
        </div>
     );

};


