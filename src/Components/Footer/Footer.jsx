import React from "react";
import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <div className="mainFooter">
      <div className="upparPart">
        <div className="footerText">
          <h3>Ready For A Next Projects</h3>
          <span>Let`s Get Started!</span>
        </div>
        <div className="footerBtn">
          <NavLink to="/contact" className="btn">Contact</NavLink>
        </div>
      </div>
      <div className="lowerPart">
      𓂀  𝕄𝕒𝕕𝕖 𝕎𝕚𝕥𝕙  <FaHeart style={{ color: "red", fontSize: "20px" }} /> 𝔹𝕪 𝔸𝕣𝕡𝕚𝕥  <FaRegCopyright style={{ fontSize: "20px" }} /> 2023 𓂀
      </div>
    </div>
  );
};

export default Footer;
