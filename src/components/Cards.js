import React, { Component } from "react";
import Card from "./CardUI";
import logo from "../SabrinaLogo.PNG";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={logo} title="Happy Birthday Cake"/>
          </div>
          <div className="col-md-4">
            <Card title="Everyday Bespoke Cake" imgsrc={logo} />
          </div>
          <div className="col-md-4">
            <Card title="Bespoke Celebratory Cake Flavours" imgsrc={logo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
