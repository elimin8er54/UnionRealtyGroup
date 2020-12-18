// @ts-nocheck

import React, {useEffect} from "react";
import "../../App.css";
import ContactManager from "../reused/ContactManager";

//Googles type defs are bugged so I skipped type checking here 

const Contact = () => {
 
 
  useEffect(() => {
    /*
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': "109 Elm St. Newton, MA 02465"
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            const myOptions = {
                zoom: 8,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            const map = new google.maps.Map(document.getElementById("map"), myOptions);

            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        }
    });
    */

   const map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
  },[]);


  
 
  return (
    <div className="contact">
      
      <div id = "map" className="map"></div>
      <div className="contact-top"></div>
     
      <div className = "contact-cm"><ContactManager /></div>
    </div >
  );
}

export default Contact;
