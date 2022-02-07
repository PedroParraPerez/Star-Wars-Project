import React, { useState, useEffect, useContext } from "react";

import "../../styles/detailsPeople.css"


 export const DetailsPeople = () => {


return(

        <div className="Container-fluid">
            <div className="row">
                <div className="col-xl-12 wrappeople">
                    <dic className="col-xl-7 peoplebucketimg">
                        <img className="peoplephoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
                    </dic>
                    <div className="col-xl-5 peopledescription">
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
