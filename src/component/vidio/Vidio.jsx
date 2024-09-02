import React from "react";
import "./vidio.css"
import img from "../../assets/images/مبرمج.png"
const Vidio = ({setcont}) => {
  return (
    <div className="video">
      <div>
        <img  src={img} alt="" /> <i onClick={()=>setcont(true)} className="fa-solid fa-circle-play"></i>
      </div>
      <div>
        <h2>you are in video section</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          nihil. Ullam officia quo nulla corrupti, ut quia ea aliquam! Mollitia
          labore dolore, laboriosam asperiores provident nisi! Quibusdam,
          facere. Eveniet, perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          nihil. Ullam officia quo nulla corrupti, ut quia ea aliquam! Mollitia
          labore dolore, laboriosam asperiores provident nisi! Quibusdam,
          facere. Eveniet, perspiciatis!
        </p>
      </div>
    </div>
  );
};

export default Vidio;
