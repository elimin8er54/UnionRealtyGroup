import React from "react";
import "../../App.css";

const Landing = () => {
  return (
    <React.Fragment>
      <div style = {{width:"50%",textAlign:"center"}} className="home">
      <img
              className="header-logo"
              src={require("../../../../public/images/logo.png")}
            />
 <p> Website Under Construction. Planned launch January 2021.</p>
      </div>
    
    </React.Fragment>
  );
};

export default Landing;
 