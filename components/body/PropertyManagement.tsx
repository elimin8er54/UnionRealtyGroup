import React from "react";
import "../../App.css";
import SlideShow from "../reused/SlideShow";
import ContactManager from "../reused/ContactManager";

const PropertyManagement = () => {
  return (
    <div className="propertymanagement">
     
       {/* <SlideShow  slideStyle = {[{imageSrc:"asd",text:"asd"}]} /> */} 
        <span>Brown Stone Management</span>

        <ContactManager />

    </div>
  );
}

export default PropertyManagement;
