import React from "react";
import FeaturedListingPhoto from "../reused/FeaturedListingPhoto";
import SearchBar, { Tab } from "../reused/SearchBar";
import FadeInSection from "../FadeInSection";
import ContactManager from "../reused/ContactManager";


import "../../App.css";

const Home = () => {
  return (
    <React.Fragment>

      <div className="home">
        <video className="backvideo" autoPlay muted loop plays-inline="true">
          <source src={require("../../../../public/videos/boston.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="indev"><span className="indev-text">This website is currently in development. Most images and words are placeholders. Planned launch is January 1st 2021</span></div>
        <div className="searchbar-wrapper">
          <SearchBar default={Tab.BUY} buttons={[Tab.BUY, Tab.RENT]} />
        </div>
        <div className="home-bottom">
          <div className="fl-header">
            <h1>Featured Listings</h1>


            <p>
              Browse Some of the hottest listings in Boston and surrounding areas
          </p>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h4>
          </div>

          <div className="featured">
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/1.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Newton <br />BED: 3 <br />BATH: 1 <br />PRICE: $2,200.00</>}
            />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/2.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Boston <br />BED: 1 <br />BATH: 1 <br />PRICE: $3,219.00</>}
            />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/3.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Boston <br />BED: 1 <br />BATH: 1 <br />PRICE: $2,924.00</>}
            /> <br />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/4.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Boston <br />BED: 2 <br />BATH: 2 <br />PRICE: $3,230.00</>}
            />

            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/5.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Newton <br />BED: 2<br />BATH: 1 <br />PRICE: $2,903.00</>}
            />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/6.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Newton <br />BED: 2 <br />BATH: 1.5 <br />PRICE: $2,900.00</>}
            /> <br />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/7.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Waltham <br />BED: 1 <br />BATH: 1 <br />PRICE: $2,171.00</>}
            />
            <FeaturedListingPhoto
              width={"200px"}
              height={"250px"}
              srcUrl={
                require("../../../../public/images/properties/8.jpg")
              }
              hrefUrl={"#"}
              text={<>LOCATION: Waltham <br />BED: 1 <br />BATH: 1 <br />PRICE: $2,136.00</>}
            />
          </div>

          <span className="home-ourservices">Our Services</span><div className="customBorder"> </div>
          <div className="services">
            <FadeInSection>
              <div className = "a">
              <FeaturedListingPhoto
                width={"240px"}
                height={"480px"}
                srcUrl={
                  require("../../../../public/images/vertical_images/1.png")
                }
                hrefUrl={"/leasing"}
                text={<><i>LEASE</i></>}
              />
          

              <FeaturedListingPhoto
                width={"240px"}
                height={"480px"}
                srcUrl={
                  require("../../../../public/images/vertical_images/2.png")
                }
                hrefUrl={"/sales"}
                text={<><i>BUY</i></>}
              />
              <FeaturedListingPhoto
                width={"240px"}
                height={"480px"}
                srcUrl={
                  require("../../../../public/images/vertical_images/4.png")
                }
                hrefUrl={"/sales"}
                text={<><i>SELL</i></>}
              />
              <FeaturedListingPhoto
                width={"240px"}
                height={"480px"}
                srcUrl={
                  require("../../../../public/images/vertical_images/3.png")
                }
                hrefUrl={"propertymanagement"}
                text={<><i>PROPERTY MANAGEMENT</i></>}
              />
                  </div>
            </FadeInSection>
            
            <div className="contact-cm"><ContactManager /></div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
