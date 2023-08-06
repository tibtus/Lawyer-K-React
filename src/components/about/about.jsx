import React from "react";
//styles
import "./about.css";
//components
import Project from "../project/project";

function About() {
    return (
        <div id="about" className="container about-container">
            <Project className={"options"}/>
        </div>
    );
}

export default About;
