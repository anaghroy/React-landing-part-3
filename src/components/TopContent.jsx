import React from "react";
import center from "../assets/images/center.png";
import Arrow from "./Arrow";

const TopContent = () => {
  return (
    <div className="main-content">
      <div className="left">
        <div className="para-1">
          <p>Discover</p>
          <p>Digital Art and</p>
          <p>Collect NFTs.</p> 
        </div>
        <div className="para">
          <p>
            EnDasmu is a shared liquidity NFT market smart contract which is
            used by multiple website to provide the users the best possible
            experience.
          </p>
        </div>
        <div className="left-bottom">
          <div className="button">
            <a href="#">Get Started</a>
          </div>
          <div className="button-2">
            <p>Learn More</p>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={center} alt="Center" />
      </div>
    </div>
  );
};

export default TopContent;
