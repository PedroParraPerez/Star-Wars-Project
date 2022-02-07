import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailsPeople.css"


 export const DetailsPeople = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
return(

        <div className="Container-fluid">
            <div className="row">
                <div className="col-xl-12 wrappeople">
                    <dic className="col-xl-7 bucketimg">
                        <img className="peoplephoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </dic>
                    <div className="col-xl-5 peopledescription">
                        <ul className="">
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
