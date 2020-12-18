import React from "react";
import "../../App.css";
import SlideShow from "../reused/SlideShow";
import SearchBar, { Tab } from "../reused/SearchBar";
import ContactManager from "../reused/ContactManager";

const Sales = () => {
  return (
    <React.Fragment>
      <div className="slideshow-wrapper">
      <SlideShow
          slideStyle={[
            {
              imageSrc:
              require("../../../../public/images/slideshow/3.jpg"),
              text: "We are here to help you find your next Boston apartment.",
            },
            {
              imageSrc:
              require("../../../../public/images/slideshow/2.jpg"),
              text: "Dedicated workers here to help you.",
            },
            {
              imageSrc:
              require("../../../../public/images/slideshow/1.jpg"),
              text: "Lorem Ipsom",
            }
          ]}
        />
      </div>
      <div className="sales">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </p>

        <p>
        Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <div className = "leasing-bottom">
        <SearchBar default={Tab.BUY} buttons={[Tab.BUY]} />
        </div>
  
    </React.Fragment>
  );
};

export default Sales;
