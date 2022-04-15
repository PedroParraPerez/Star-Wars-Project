import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsPlanets.css"
import { Context } from "../store/appContext";

 export const DetailsPlanets = () => {


// ----------------------------------- DATA DE LOS PLANETAS -----------------------------------	


const {store,actions} = useContext(Context)
const params = useParams();

    useEffect( ()=> {
        actions.getPlanetsById(params.uid)
    },[]) 

return(

    <div className="Container-fluid">
    {store.planetdetails.map((detail,index) =>{
        return ( 
    <div className="row" key={index}>
        <div className="col-xl-12 wrapplanets">
            <div className="col-xl-7 planetsbucketimg">
                <img className="planetsphoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
            </div>
            <div className="col-xl-5 planetsdescription">
                <ul>
                    <li>Nombre: {detail.name}</li>
                    <li>Diametro: {detail.diameter}</li>
                    <li>Periodo de Rotación: {detail.rotation_period}</li>
                    <li>Gravedad: {detail.gravity}</li>
                    <li>Población: {detail.population}</li>
                </ul>
            </div>
        </div>
        </div> 
        )
    })}
</div>
     );

};