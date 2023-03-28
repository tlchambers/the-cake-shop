import React from "react";
import "../Styling/Banner.css";

const Banner = (props) => {
  return (
    <div class=".container-fluid">
      <div class="row" style={{backgroundColor: "#f5e9d7"}}>
        <div class="col ">
          <h4 className="text-center">{props.title}</h4>
          <p className="text-left">{props.paragraph}</p>
        </div>
        <div class="col">
        <img src={props.imgsrc} alt="" class="float-end" />
        </div>
      </div>
    </div>
    // <div class="jumbotron">
    //   <div class=".container-fluid">
    //     <div class="row">
    //       <div class="col-sm-5">
    //         <h2 className="banner-title">{props.title}</h2>
    //         <p className="p-container">{props.paragraph}</p>
    //       </div>
    //       <div class="col-sm-7">
    //         <div className="over-flow">
    //         <img src={props.imgsrc} alt="" class="banner-img" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
