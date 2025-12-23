import React from "react";
import { navLinks } from "../Data/NavbarData";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>EnDasmu</h2>
      </div>
      <div className="hero">
        {navLinks.map((item) =>
          item.label === "Connect Wallet" ? (
            <div className="button" key={item.id}>
              <a href="#">{item.label}</a>{/**Condition: 1 */}
            </div>
          ) : (
            <a href="#" key={item.id}>
              {item.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
