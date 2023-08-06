//styles
import "./members.css";

const Members = () => {
  return (
      <div id="members" className="container members-container">
        <h1 className="member-txt">Education</h1>

        <div className="member member-1">
          <div className="member-img">
            <div className="position">UDEMY</div>
          </div>

          <div className="member-info">
            <h1 className="name">
              Course "Web Developer"
            </h1>

            <h3 className="period"> 04.2021 - 08.2021 ( 4 months ) </h3>
            <h4 className="about">
              HTML5 | CSS3 |
              Bootstrap 4/5 | FlexBox | CSS Grid |
              Mobile adaptation of sites and applications |
              Landing sites on CMS |
              Site speed optimization |
              Sass/Scss/Less preprocessors |
              BEM methodology |
              Automating processes using the Gulp task scheduler |
            </h4>
            <a href="https://www.udemy.com/certificate/UC-b2428720-58ee-4be5-9783-e562d31ac5ac/"
               className="contact-member"
               target={"blank"}
            >
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-2">
          <div className="member-img">
            <div className="position">UDEMY</div>
          </div>
          <div className="member-info">
            <h1 className="name">Course "Complete JavaScript + React"</h1>

            <h3 className="period">
              08.2021 - 04.2022 ( 8 months )
            </h3>
            <h4 className="about">
              ES6+ | technologies AJAX, JSON |
              JSX, Error Boundaries |
              Render-props pattern |
              React + Redux |
              npm, Babel, Browserify, Webpack, Heroku, Firebase |
              React (Redux) |
              Git and GitHub |
              Promise (ES6) |
              Fetch API |
              Async/Await (ES8) |
              Jquery library |
              JS animation, requestAnimationFrame |
            </h4>
            <a href="https://www.udemy.com/certificate/UC-849f81a7-eece-415f-b002-f6ae00e72f8d/"
               className="contact-member"
               target={"blank"}
            >
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-3">
          <div className="member-img">
            <div className="position">UDEMY</div>
          </div>
          <div className="member-info">
            <h1 className="name">Course "CMS WordPress"</h1>

            <h3 className="period">
              08.2021 - 09.2021 ( 1 month )
            </h3>
            <h4 className="about">
              installation of the layout on the engine of the Wordpress site management system
              working with plugins for WP
              creating your own themes for Wordpress
              principles of work with site management systems (CMS)
              working with local servers and phpmyadmin
            </h4>
            <a href="https://www.udemy.com/certificate/UC-b15be99f-9fe6-40f2-9810-b6bc6d3f8ae3/"
               className="contact-member"
               target={"blank"}
            >
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-4">
          <div className="member-img">
            <div className="position">UDEMY</div>
          </div>
          <div className="member-info">
            <h1 className="name">Course "Practical JavaScript –
              Advanced Level" </h1>

            <h3 className="period"> 10.2021 - 12.2021 ( 2 months )
            </h3>
            <h4 className="about">
              Сreating a JavaScript UI Library,
              Practice with OPP style
            </h4>
            <a href="https://www.udemy.com/certificate/UC-53a42935-ee6d-49d8-8d91-5553f6619690/"
               className="contact-member"
               target={"blank"}
            >
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-5">
          <div className="member-img">
            <div className="position">UDEMY</div>
          </div>
          <div className="member-info">
            <h1 className="name"> Course "Node.js"
            </h1>

            <h3 className="period"> 06.2022 - 10.2022 ( 4 months ) </h3>
            <h4 className="about">
              from scratch,
              basics and application architecture
            </h4>
            <a href="https://www.udemy.com/certificate/UC-58882fd2-6f76-43dd-b30d-2e648d544627/"
               className="contact-member"
               target={"blank"}
            >
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-7">
          <div className="member-img">
            <div className="position">ITVDN</div>
          </div>
          <div className="member-info">
            <h1 className="name"> Diploma React Developer
            </h1>

            <h3 className="period"> · Git Basics, · React Basic, · React Advanced, </h3>
            <h4 className="about">
            </h4>
            <a href="https://testprovider.com/ru/search-certificate/TP68853173D/"
               className="contact-member"
               target={"blank"}
            >
              <span>Diploma</span>
            </a>
          </div>
        </div>

        <div className="member member-7">
          <div className="member-img">
            <div className="position">ITVDN</div>
          </div>
          <div className="member-info">
            <h1 className="name"> Diploma JavaScript Developer
            </h1>

            <h3 className="period">
              · Git Basics,
              · JavaScript Fundamentals,
              · Advanced JavaScript,
              · JavaScript Design Patterns,
              · ECMAScript 6,
              · Expert JavaScript. </h3>
            <h4 className="about">

            </h4>
            <a href="https://testprovider.com/ru/search-certificate/TP11584404D"
               className="contact-member"
               target={"blank"}
            >
              <span>Diploma</span>
            </a>
          </div>
        </div>


      </div>
  );
};

export default Members;
