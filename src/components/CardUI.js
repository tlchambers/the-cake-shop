import React from "react";
import '../Styling/Cards.css'

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="over-flow">
        <img src={props.imgsrc} alt="" className="card-img-top img-fluid"/>
      </div>
      <div className="card-body text-dark">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-text text secondary">{props.text}</p>
        <p className="card-text text secondary">{props.shopNow}</p>
      </div>
    </div>
  );
};

export default Card;
