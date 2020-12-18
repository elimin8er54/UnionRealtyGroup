import React from "react";
import "../../App.css";
import SlideShow from "../reused/SlideShow";

const Form =()=> {
    return (
        <div className="contact">
            <SlideShow slideStyle = {[{imageSrc:"asd",text:"asd"}]}   /><br />
            <button>Rental Application</button>
            <button>Guarantor Form</button>
            <button>Deposit Form</button>
        </div >
    );
}

export default Form;