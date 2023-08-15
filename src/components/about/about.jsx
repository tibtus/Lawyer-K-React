import React from "react";
//styles
import "./about.css";
//images
import ImageMe from '../props/photo/about.jpg';
//components
import Button from '@mui/material/Button';


function About() {
    return (
        <div id="about" className="container about-container">
            <div className="about-container-photo">
                <a href="/">
                    <img src={ImageMe} alt="ImageMe"/>
                </a>
            </div>
            <div className="about-container-description">
                <div className="description">
                    <h2>Про нас</h2><br/>
                    <h3>Адвокатське бюро «Коломієць Лігал Консалтинг»</h3><br/>

                    <p>засноване з визначеною метою – сприяти побудові справедливого і правового
                        суспільства. Ми віримо в принципи права, захищаємо права та інтереси людей
                        і сприяємо правовій культурі в нашому середовищі.
                        <br/><br/>
                    </p>

                    <p>
                        <b>Наше завдання</b> - надання професійної юридичної підтримки та захисту інтересів
                        клієнтів. <br/><br/>
                    </p>

                    <p>
                        <b> Наша ціль</b> - забезпечити справедливість, захистити права та інтереси наших
                        клієнтів і допомогти їм досягти успіху в юридичних справах.<br/>
                        Ми пишаємося нашою здатністю знайти найкращі рішення для наших клієнтів,
                        навіть у складних та спірних ситуаціях.<br/><br/>

                    </p>

                    <p>
                        <b> Команда АБ «Коломієць Лігал Консалтинг»</b> складається зі
                        висококваліфікованих, талановитих та амбітних юристів/адвокатів, які мають
                        багаторічний досвід роботи у різних галузях права, дотримуються найвищих
                        стандартів юридичної етики, забезпечуючи повну конфіденційність та повагу до
                        наших клієнтів.<br/><br/>
                    </p>

                    <p>
                        Ми пишаємося нашою експертністю та вмінням знаходити ефективні рішення
                        для найскладніших правових ситуацій.
                    </p>

                    <p>
                        Ми намагаємося пояснити право доступним і зрозумілим способом для
                        кожного, ми прагнемо розтлумачити Ваші права та знайти найоптимальніші
                        шляхи їх захисту.
                    </p>

                    <Button variant="outlined" color="info" className="description-button">
                        Зворотній звʼязок
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default About;
