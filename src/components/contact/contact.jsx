import React from "react";
//styles
import "./contact.css";
//icons
import {AiFillFacebook, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";


function Contact() {

    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="mailto:tibtus@gmail.com"
                    className="contact email"
                    target={"blank"}
                >
                    <AiOutlineMail className="icon"/>
                    <h2>
                        Email <span> tibtus@gmail.com </span>
                    </h2>
                </a>

                <a
                    href="https://www.linkedin.com/in/burdeinyi/"
                    className="contact Linkedin"
                    target={"blank"}
                >
                    <AiFillLinkedin className="icon"/>
                    <h2>
                        Linkedin <span> Burdeinyi </span>
                    </h2>
                </a>


                <a
                    href="https://telegram.me/tibtus"
                    className="contact telegram"
                    target={"blank"}
                >
                    <FaTelegram className="icon"/>
                    <h2>
                        Telegram <span> +38 093 911 7418 </span>
                    </h2>
                </a>


            </div>


            <div className="contact-links">


                <a
                    href="https://www.facebook.com/burdeinyi.serhii"
                    className="contact facebook"
                    target={"blank"}
                >
                    <AiFillFacebook className="icon"/>
                    <h2>
                        Facebook <span> Burdeinyi </span>
                    </h2>
                </a>

                <a
                    href="#contact"
                    className="contact"
                >
                    <div className="contact QRCode">
                        <div className="contact QRCode img"/>
                    </div>
                    <h2>
                        <span> QRCode </span>
                    </h2>
                </a>

                <a
                    href="https://wa.me/380939117418"
                    className="contact WhatsApp"
                    target={"blank"}
                >
                    <AiOutlineWhatsApp className="icon"/>
                    <h2>
                        WhatsApp <span> +38 093 911 7418 </span>
                    </h2>
                </a>


            </div>
        </div>


    );
}

export default Contact;
