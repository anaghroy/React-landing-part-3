import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>EnDasmu</h2>
      </div>
      <div className="hero">
        <a href="#">Collection</a>
        <a href="#">Market Place</a>
        <a href="#">Community</a>
        <div className="button">
          <a href="#">Connect Wallet</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
