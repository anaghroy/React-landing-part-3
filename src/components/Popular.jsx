import React from "react";
import Arrow from "./Arrow";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
const Popular = () => {
  return (
    <div className="main-popular">
      <div className="main-image">
        <div className="first">
          <img src={one} alt="one-profile" />
        </div>
        <div className="second">
          <img src={two} alt="two-profile" />
        </div>
        <div className="three">
          <img src={three} alt="three-profile" />
        </div>
        <div className="four">
          <img src={four} alt="four-profile" />
        </div>
      </div>
      <div className="right-content">
        <h6>Popular Item</h6>
        <div className="heading">
          <span>Hot Tending</span>
          <span>On This</span>
          <span>Week.</span>
        </div>
        <div className="para">
          <p>
            Various kinds of NFTs that arer trending the trend will be reset
            every week. Don't miss out on the <br />
            best NFTs every week.
          </p>
        </div>
        <div className="button-2">
          <p>See all</p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Popular;
