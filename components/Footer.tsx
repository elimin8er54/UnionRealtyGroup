import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footerSegment">
          <p className="mobileFix">Union Realty Group</p>
          <span>
            Property Management, Sales and Leasing for greater Boston and
            surrounding areas!
            <br />
          </span>
          <br />

          <FacebookIcon />
          <InstagramIcon />
        </div>
        <div className="footerSegment">
          <p>Location</p>
          <span>109 Elm St. Newton, MA 02465</span>
        </div>
        <div className="footerSegment">
          <p>Contact Us</p>
          <span>
            Sales, Leasing, Property
            <br />
            Managment for the greater
            <br />
            Boston area.
          </span>
        </div>

        <div className="footerSegment">
          <p>Navigate</p>

          <span>
            <NavLink to="/home">HOME</NavLink>
          </span>
          <br />
          <span>
            <NavLink to="/about">ABOUT</NavLink>
          </span>
          <br />
          <span>
            <NavLink to="/leasing">LEASING</NavLink>
          </span>
          <br />
          <span>
            <NavLink to="/sales">SALES</NavLink>
          </span>
          <br />
          <span>
            <NavLink to="/propertymanagement">PROP MANAGEMENT</NavLink>
          </span>

        </div>

      </div>
      <div className="custom-footer">Website Created by  <a href="https://www.linkedin.com/in/shaunt-keshishian-045450195/">Shaunt Keshishian</a></div>
    </div>
  );
};

export default Footer;
