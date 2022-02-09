import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import "../../styles/detailsStarships.css";
import { Context } from "../store/appContext";

 export const DetailsStarships = () => {

const {store,actions} = useContext(Context)
const params = useParams();

/*
    useEffect( ()=> {
        actions.getStarshipsById(params.StarshipsId)
    },[]) 
    */

return(

        <div className="Container-fluid">

            <div className="row">
                <div className="col-xl-12 wrapStarships">
                    <dic className="col-xl-7 Starshipsbucketimg">
                        <img className="Starshipsphoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </dic>
                    <div className="col-xl-5 Starshipsdescription">
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
