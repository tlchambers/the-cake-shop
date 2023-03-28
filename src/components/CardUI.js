import React from "react";
import '../Styling/Cards.css'

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="over-flow">
        <img src={props.imgsrc} alt="" className="card-img-top img-fluid"/>
      </div>
      <div className="card-body text-dark">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-text text secondary">
        Here at Boujie Delights you will find tasteful and visually pleasing freshly baked buttercream cakes, cupcakes and treats based in Brockley, South East London.
        </p>
        
      </div>
    </div>
  );
};

export default Card;
