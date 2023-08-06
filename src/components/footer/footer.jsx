import React from "react";
import Package from "../../../package.json";
//styles
import "./footer.css";
// icons
import {BsMouse} from "react-icons/bs";
import {FaTelegram} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {TiSocialGithub} from "react-icons/ti";

function Footer() {

    const dateNow = new Date().getFullYear();


    return (
        <div id="footer" className="container footer-container">
            <h1>
                That's all{" "}
                <a href="#home">
                    <h2>
                        <BsMouse/> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://github.com/tibtus">
                    {" "}
                    <TiSocialGithub className="social"/>
                </a>

                <a href="https://telegram.me/tibtus">
                    <FaTelegram className="social"/>
                </a>
                <a href="https://www.linkedin.com/in/burdeinyi/">
                    {" "}
                    <AiFillLinkedin className="social"/>
                </a>


            </div>

            <div className="date">
                Burdeinyi Serhii © v.{Package.version} ,
                <a href="https://www.linkedin.com/in/burdeinyi/"
                   target={"blank"}
                > Угода на використання ресурсу </a>
                {dateNow}.
            </div>
        </div>
    );
}

export default Footer;
