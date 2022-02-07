import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
        <div className="card">
        <img className="card-img-top" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg" alt="Card image cap"/>
        <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  </div>
	);
};

Card.propTypes = {
    title: PropTypes.string
}
export default Card;