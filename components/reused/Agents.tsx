import React, { useState } from "react";
import { Skeleton } from "@material-ui/lab";
interface Props {
  [key: string]: string;
  imageSrc: string;
  text: string;
  width: string;
  height: string;
  name: string;
}

const Agents: React.FC<Props> = (props: Props): React.ReactElement<Props> => {
  const [isBioShowing, setIsBioShowing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  function showBio() {
    setIsBioShowing(true);
  }

  function removeBio() {
    setIsBioShowing(false);
  }

  let classNames;
  let photo;
  if (isBioShowing) {
    classNames = "fadeIn";
    photo = "fadeOut";
  } else {
    classNames = "fadeOut";
    photo = "fadeIn";
  }

  return (
    <React.Fragment>
      <div className="agent-container">
        <img
          style={isLoaded ? {} : { display: "none" }}
          onLoad={() => setIsLoaded(true)}
          src={props.imageSrc}
          className={`agent-image  ${photo}`}
          onMouseLeave={removeBio}
          onMouseEnter={showBio}
        />
        {isLoaded ? <div></div> : <Skeleton variant="rect" height={250} />}

        <span
          onMouseLeave={removeBio}
          onMouseEnter={showBio}
          className={classNames}
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          {props.text}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Agents;
