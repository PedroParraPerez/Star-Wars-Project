import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/detailsStarships.css";
import { Context } from "../store/appContext";

export  const DetailsStarships = () => {

    const [card, setCard] = useState([])
    const {store,actions} = useContext(Context)

    let params = useParams();
    
    console.log("aqui esta params id", params.id)
    
    useEffect( ()=> {
        actions.getStarshipsById(params.id)
    },[]) 
    
    
    // useEffect(()=> {
    //     console.log("aqui estyoy store", store.starshipsDetails)
    //     setCard(
    //         store.starshipsDetails.map((detail,index) =>{
    //             return ( 
    //          <div className="row" key={index}>
    //             <div className="col-xl-12 wrapStarships">
    //                 <div className="col-xl-7 Starshipsbucketimg">
    //                     <img className="Starshipsphoto" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg"/>
    //                 </div>
    //                 <div className="col-xl-5 Starshipsdescription">
    //                     <ul>
    //                         <li>starship_class:{detail.starship_class}</li>
    //                         <li>model:{detail.model}</li>
    //                         <li>manufacturer:{detail.manufacturer}</li>
    //                         <li>cost_in_credits:{detail.cost_in_credits}</li>
                    
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div> 
    //             )
    //         })
    //     )
    // }, [store.starshipsDetails])
    


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
                            <li>starshipclass:{detail.starship_class}</li>
                            <li>model:{detail.model}</li>
                            <li>manufacturer:{detail.manufacturer}</li>
                            <li>cost_in_credits:{detail.cost_in_credits}</li>
                    
                        </ul>
                    </div>
                </div>
            </div> 
                )
            })}
        </div>
     );

};


