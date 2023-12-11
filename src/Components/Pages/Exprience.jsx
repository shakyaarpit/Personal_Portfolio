import React from "react";
import imgData from "../Data/Language";
import Data from "../Data/ExprienceData";

const Exprience = () => {
  return (
    <>
    <h1 style={{textAlign:"center", color:"white", paddingTop: "20px"}}>EXPRIENCES</h1>
    <div className="exprienceSection">
  
   
      <div className="language">
        
        {imgData.map((value, index) => {
          return <img src={value.image} alt="" key={index} />;
        })}
      </div>

      <div className="exp">
        {Data.map((val, ind) => {
          return (
            <div className="expCard" key={ind}>
              <div className="expImg">
                <img src={val.imgsrc} alt="" />
              </div>
              <div className="expDetail">
                <h2>{val.heading_h2}</h2>
                <p>{val.date}</p>
                <h4>{val.skill}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Exprience;
