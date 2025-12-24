import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = ({ footerLinks }) => {
  console.log(footerLinks);
  return (
    <div className="main-footer">
      <div className="logo">
        <h6>EnDasmu</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo
          tempore harum
        </p>
        <div className="icon">
          <Instagram color="white" />
          <Twitter color="white" />
          <Facebook color="white" />
          <Youtube color="white" />
        </div>
        <p>Copyright &copy; AnaghRoy 2025</p>
      </div>
      <div className="bottom-content">
        {footerLinks.map((section, index) => (
          <div className="text" key={index}>
            <h6>{section.title}</h6>
            <div className="ul">
              {section.links.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
