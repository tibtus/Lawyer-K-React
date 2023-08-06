import React, {useState} from "react";
//styles
import "./experience.css";


function Experience() {
    let [animation, setAnimation] = useState(true);
    let handleClick = (e) => {
        setAnimation(!animation);
    };
    //імпорт зоображення
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../props/experience/', false, /\.(png|jpe?g|svg)$/));
    //імпорт зоображення


    return (
        <div id="experience" className="container experience-container">
            <section onClick={handleClick} className={animation ? "enable-animation" : ""}>
                <div className="marquee marquee--fit-content">
                    <ul className="marquee__content">
                        {images ? images.map((image, index) => (
                            <li key={index} style={{
                                background: `url(${image}) center/cover no-repeat`
                            }}></li>
                        )) : <li></li>}
                    </ul>

                    <ul className="marquee__content">
                        {images ? images.map((image, index) => (
                            <li key={index} style={{
                                background: `url(${image}) center/cover no-repeat`
                            }}></li>
                        )) : <li></li>}
                    </ul>


                </div>

            </section>
        </div>
    );
}

export default Experience;

