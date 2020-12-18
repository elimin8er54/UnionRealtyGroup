import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  [key: string]: string | JSX.Element;
  width: string;
  height: string;
  srcUrl: string;
  hrefUrl: string;
  text: JSX.Element;
}

const FeaturedListingPhotos: React.FC<Props> = (
  props: Props
): React.ReactElement<Props> => {
  const divStyle = {
    width: props.width,
    height: props.height,
  };

  return (
    <div className="fl-container" >
     
      <NavLink to={props.hrefUrl}> 
        <div className="fl-photo-container" style={divStyle}>
          <img className="fl-photo" src={props.srcUrl} />
        </div>
        </NavLink>
      <div className="fl-text">
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default FeaturedListingPhotos;
