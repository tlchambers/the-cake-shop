import React from "react";
import "../Styling/Banner.css";


const Banner = (props) => {
  return (
    <div className=".container-fluid">
      <div class="row">
        <div class="col justify-content-center text-center">
          <h5 className="">{props.title}</h5>
          <p className="text-left">{props.paragraph}</p>
          <p className="text-left">{props.paragraph2}</p>
          {/* <button className="text-left">{props.button}</button> */}
        </div>
        <div class="col">
        <img src={props.imgsrc} alt="" className="float-end" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
