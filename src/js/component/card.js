import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/1.jpg"} className="card-img-top mx-auto" alt="..." style={{ width: "100%", height:"70%" , }}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card 's content.
        </p>
        <div className="d-flex">
          <a href="#" className="btn btn-outline-primary">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning  ms-auto">
            <i className="fa fa-regular fa-heart "></i>
          </a>
        </div>
        {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
      </div>{" "}
    </div>
  );
};
