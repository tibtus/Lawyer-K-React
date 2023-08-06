import React, {useEffect, useState} from "react";
//styles
import "./project.css";
import CustomCarusel from "../custom/customCarusel/customCarusel";
import {BsApp} from "react-icons/bs";
//Context
import MyContext from "../../context/context";

const Project = ({className}) => {

    const [elements, setElements] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const divElements = document.querySelectorAll(`.${className} .option`);
        const elementsArray = Array.from(divElements).map(w => <BsApp className="icon"/>);
        setElements(elementsArray);
    }, [className]);

    useEffect(() => {
        const divElements = document.querySelectorAll(`.${className} .option`);
        divElements.forEach((element, i) => {
            if (i === activeIndex) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    }, [activeIndex, className]);

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    return (

        <MyContext.Consumer>
            {context => (

                <div style={{width: "100%"}}>
                    <h1 className="member-txt">Projects</h1>

                    <CustomCarusel/>
                    <div className="member-nav">
                        <ul>
                            {elements.map((element, index) => (
                                <li
                                    className={context.value === index ? "active" : ""}
                                    key={index}
                                    onClick={() => {
                                        handleSelect(index);
                                        context.updateValue(index);
                                    }}
                                >{element}</li>
                            ))}
                        </ul>

                    </div>
                </div>


            )}
        </MyContext.Consumer>


    )

};

export default Project;
