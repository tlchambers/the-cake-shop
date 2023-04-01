import React, { Component } from "react";
import Card from "./CardUI";
// import logo from "../SabrinaLogo.PNG";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-4">
            <a href="/collections/cakes" class=".stretched-link">
              <Card
                imgsrc="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                title="BESPOKE CAKES" text="If you’re looking for a beautiful handmade birthday cake delivered UK wide and in London, you’ve come to the right place."
                shopNow="SHOP NOW"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" class=".stretched-link">
              <Card
                imgsrc="https://images.unsplash.com/photo-1551893134-55fc5191c037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxjdXBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                title="CUPCAKES" text="Despite the size of our small cupcakes, we don’t compromise on big flavours and beautiful designs to get your mouth watering!"
                shopNow="SHOP NOW"
              />
            </a>
          </div>
          <div className="col-sm-4">
            <a href="#" class=".stretched-link">
              <Card
                imgsrc="https://images.unsplash.com/photo-1612809077979-c4343e36c423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmklMjBjYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                title="MINI CAKES" text="Our mini cupcakes delivered are the perfect way to treat yourself without indulging in a big cake or other goodies."
                shopNow="SHOP NOW"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
