import React from "react";
import "../../App.css";
import SlideShow from "../reused/SlideShow";
import Agents from "../reused/Agents";
import { colors } from "@material-ui/core";

const About = () => {
  return (
    <div className="about">
      <div className="innerComponent">
        <h1 className = "mini-title">Who we are</h1>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h4>
       <div className = "customBorder"> </div>
        <div className = "agent-pictures">
        <Agents
          imageSrc={require("../../../../public/images/agents/1.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/2.jpg")}
          name={"Shaunt Keshishian"}
          text={"Cameron Matthew Noris is a 90-year-old trainee tradesperson who enjoys playing card games, walking and learning new languages. He is creative and loveable, but can also be very hard working."}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/3.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/4.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        </div>
        <div className = "agent-pictures">
        <Agents
          imageSrc={require("../../../../public/images/agents/1.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/2.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/3.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        <Agents
          imageSrc={require("../../../../public/images/agents/4.jpg")}
          name={"Shaunt Keshishian"}
          text={"Wow, This dude is amazing. Best agent that ever existed"}
          width={"asd"}
          height={"asd"}
        />
        </div>
      </div>
    </div>
  );
};

export default About;
