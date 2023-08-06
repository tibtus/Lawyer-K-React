import React from "react"

//styles
import "./customCarusel.css";
//MUI
// react icons
import {DiGit} from "react-icons/di";
import MyContext from "../../../context/context";

const CustomCarusel = () => {
    //імпорт зоображення
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../../props/project/', false, /\.(png|jpe?g|svg)$/));
    //імпорт зоображення

    let handleClick = (e) => {

        let foo = document.querySelectorAll(".options .option");

        for (let i = 0; i < foo.length; i++) {

            foo[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");

    };

    let arrData = [
        {
            links: "https://dpdmarket.com/",
            titles: "DPD Market",
            subTitles: "Technologies: JS, React.js, MUI 5, Node.js, MongoDB."
        },
        {
            links: "https://creditbox.in.ua/",
            titles: "CreditBox",
            subTitles: "Technologies: JS, React.js, MUI 4, Node.js, MongoDB."
        },
        {
            links: "http://berry-com.com/",
            titles: "Business site - Berry",
            subTitles: "Technologies: WordPress, JS, jQuery"
        },
        {
            links: "https://belitrade.com/",
            titles: "Business site - BeliTrade",
            subTitles: "Technologies: HTML, SCSS, WordPress, JS, jQuery"
        },
        {
            links: "https://github.com/tibtus/React_Marvel_Comics",
            titles: "Comic Portal - React Marvel Comics",
            subTitles: "Technologies: JS, React, SCSS, gulp, webpack."
        },
        {
            links: "https://github.com/tibtus/lawyer-k",
            titles: "Business card site - Lawyer-K",
            subTitles: "Technologies: vanilla JS, ES6, SCSS, gulp, webpack."
        },

    ]

    return (

        <MyContext.Consumer>
            {context => (

                <div className="bodyBlock" style={{width: "100%"}}>
                    <div className="options">
                        {images.map((img, i) => (
                            <div key={i}
                                 className={`option ${i === 0 ? "active" : ""}`}
                                 style={{"--optionBackground": `url(${img}) center/cover no-repeat`}}
                                 onClick={(e) => {
                                     handleClick(e);
                                     context.updateValue(i);
                                 }}
                            >
                                <a href={arrData[i].links} target="blank">
                                    <div className="shadow"></div>
                                    <div className="label">
                                        <DiGit className="icon"/>
                                        <div className="info">
                                            <div className="main">{arrData[i].titles}</div>
                                            <div className="sub">{arrData[i].subTitles}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>


            )}
        </MyContext.Consumer>


    );
};

export default CustomCarusel;
