import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={rigoImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card 's content.
        </p>
        <div>
          <a href="#" className="btn btn-outline-primary">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning ms-auto">
            <i className="fa fa-regular fa-heart "></i>
          </a>
        </div>
        {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
      </div>{" "}
    </div>
  );
};
