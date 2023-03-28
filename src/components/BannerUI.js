import React from "react";
import "../Styling/Banner.css";

const Banner = (props) => {
  return (
    <div class="banner-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <h2 className="banner-title">{props.title}</h2>
            <p className="p-container">{props.paragraph}</p>
          </div>
          <div class="col-sm-7">
            <img src={props.imgsrc} alt="" class="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
