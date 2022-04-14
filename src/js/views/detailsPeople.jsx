import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsPeople.css"
import { Context } from "../store/appContext";

 export const DetailsPeople = () => {

const {store,actions} = useContext(Context);

let params = useParams();

    useEffect( ()=> {
        console.log(`aqui estamos weyy ${params.uid}`);
        actions.getPeopleById(params.uid)
    },[])

return(

        <div className="Container-fluid">
            {store.peopledetails.map((detail,index) =>{
                return ( 
            <div className="row" key={index}>
                <div className="col-xl-12 wrappeople">
                    <div className="col-xl-7 peoplebucketimg">
                        <img className="peoplephoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </div>
                    <div className="col-xl-5 peopledescription">
                        <ul>
                            <li>Nombre: {detail.name}</li>
                            <li>Altura: {detail.height}</li>
                            <li>Peso: {detail.mass}</li>
                            <li>Año de nacimiento: {detail.birth_year}</li>
                        </ul>
                    </div>
                </div>
                </div> 
                )
            })}
        </div>
     );

};
