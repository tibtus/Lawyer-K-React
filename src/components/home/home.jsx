import React, {useEffect, useState} from "react";
//styles
import './home.css';
//components
//icons
import {PiMouseSimpleDuotone} from "react-icons/pi";

//Context
import MyContext from "../../context/context";


function Home() {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../props/load/', false, /\.(png|jpe?g|svg)$/));
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    let handleClick = (e) => {
        let foo = document.querySelectorAll(".options .option");
        for (let i = 0; i < foo.length; i++) {
            foo[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");

    };
    const imagesCount = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
        }, 5000);
        return () => clearInterval(interval);
    }, [imagesCount]);

    const imageTextData = [
        {
            text: 'Kolomiiets LC - Ваша юридична безпека та запорука юридичного захисту',
        },
        {
            text: 'Ваша юридична безпека - наша мета: ефективні юридичні рішення для кожного клієнта',
        },

    ];

    return (

        <MyContext.Consumer>
            {context => (
                <div id='home' className='home-container'>
                    <div className="options">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`option ${i === activeImageIndex ? "active" : ""}`}
                                style={{"--optionBackground": `url(${img}) center/cover no-repeat`}}
                                onClick={(e) => {
                                    handleClick(e);
                                    context.updateValue(i);
                                }}
                            >
                            </div>
                        ))}
                    </div>
                    <h2>
                        <span>{imageTextData[activeImageIndex].text}</span> <br/>
                    </h2>


                    <a href='#aboutme' className='scroll-down'>
                        <hr/>

                        <PiMouseSimpleDuotone className='scroll'/>

                        <hr/>
                    </a>
                </div>
            )}
        </MyContext.Consumer>


    );
}

export default Home;
