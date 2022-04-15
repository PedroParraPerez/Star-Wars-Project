import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import corazon from "../../img/corazon.png"

const Card = (props) => {
  
	return (
        <div className="card" >
          <img className="card-img-top" src="https://pictures.abebooks.com/isbn/9781838544652-es.jpg" alt="Card image cap"/>
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <div className="row ">
                  <div className="col-xl-8">
                      <Link to={props.rute}>
                      <span className="btn btn-primary btn-lg "  role="button">Saber más</span>
                      </Link>
                  </div>
                  <div className="col-xl-4">
                      <img className="favHearthCard mt-2" src={corazon} onClick={props.fav}/>
                  </div>
              </div>
          </div>
        </div>
	);
};

Card.propTypes = {
    title: PropTypes.string,
    uid: PropTypes.string,
    fav: PropTypes.func
}
export default Card;