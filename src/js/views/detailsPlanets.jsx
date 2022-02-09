import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsPlanets.css"
import { Context } from "../store/appContext";

 export const DetailsPlanets = () => {


// ----------------------------------- DATA DE LOS PLANETAS -----------------------------------	


const {store,actions} = useContext(Context)
const params = useParams();

    useEffect( ()=> {
        actions.getPlanetsById(params.planetsId)
    },[]) 

return(

        <div className="Container-fluid">
            <div className="row">
                <div className="col-xl-12 wrapplanets">
                    <dic className="col-xl-7 planetsbucketimg">
                        <img className="planetsphoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </dic>
                    <div className="col-xl-5 planetsdescription">
                        <ul>
                            <li>Nombre:</li>
                            <li>Altura:</li>
                            <li>Peso:</li>
                            <li>Descripción:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );

};