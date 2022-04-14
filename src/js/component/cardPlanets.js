import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const CardPlanets = (props) => {
	return (
        <div className="card" >
            <img className="card-img-top" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">Aqui ira la descripcion</p>
                <Link to={"/detailsplanets/".concat(props.uid)}>
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Saber más
				</span>
			    </Link>
            </div>
         </div>
	);
};

CardPlanets.propTypes = {
    title: PropTypes.string,
    uid: PropTypes.number
}
export default CardPlanets;