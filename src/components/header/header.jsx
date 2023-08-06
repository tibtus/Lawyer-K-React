import React from "react";
//styles
import './header.css';
import logoImage from '../props/img/logoWhite.png';

function Header() {

    let handleClick = (e) => {

        console.log('active-nav', e)

        let foo = document.querySelectorAll(".navigation .icon");

        for (let i = 0; i < foo.length; i++) {
            foo[i].classList.remove("active-nav");
        }
        e.currentTarget.classList.add("active-nav");

    };

    return (
        <div id='home' className='header-container navigation'>
            <div className='header-container-block left'>
                <div className="icon " onClick={handleClick}>
                    <a href="#home">
                        ПРО НАС
                    </a>
                </div>
                <div className="icon " onClick={handleClick}>
                    <a href="#home">
                        ПОСЛУГИ
                    </a>
                </div>
                <div className="icon " onClick={handleClick}>
                    <a href="#home">
                        КОМАНДА
                    </a>
                </div>
            </div>

            <div className='header-container-block center'>
                <a href="/">
                    <img src={logoImage} alt="Logo"/>
                </a>
                <h2> KOLOMIIETS LCC <br/>
                    <span>Law Firm</span>
                </h2>

            </div>

            <div className='header-container-block right'>
                <div className="icon " onClick={handleClick}>
                    <a href="#home">
                        НОВИНИ
                    </a>
                </div>
                <div className="icon " onClick={handleClick}>
                    <a href="#home">
                        ВИЗНАННЯ
                    </a>
                </div>
                <div className="icon ">
                    <a href="/">
                        UA/EN
                    </a>
                </div>
            </div>

            <div className='header-container-block right-lang'>UA/EN</div>
        </div>
    );
}

export default Header;

