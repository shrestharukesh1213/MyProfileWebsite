import { useState } from "react";
import { useRef } from "react";
import "./styles/App.css";
import profile from "./assets/tom.jpg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/javascript.svg";
import react from "./assets/react.svg";
import flutter from "./assets/flutter.svg";
import git from "./assets/git.svg";
import github from "./assets/github.svg";
import firebase from "./assets/firebase.svg";
import linkedin from "./assets/linkedin.png";
import github64 from "./assets/github64.png";
import javascript from "./assets/jsmin.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-body">
        <Introduction />
        <AboutMe />
        <Skills />
        <Information />
      </div>
    </>
  );
}

// function Button({ buttonName, buttonText, handleClick }) {
//   return (
//     <button className={buttonName} onClick={handleClick}>
//       {buttonText}
//     </button>
//   );
// }

function Navbar() {
  return (
    <div className="navbar">
      <button
        className="Home"
        onClick={() => {
          document
            .getElementById("Home")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        HOME
      </button>
      <button
        className="AboutMe"
        onClick={() => {
          document
            .getElementById("AboutMe")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ABOUT ME
      </button>
      <button
        className="Skills"
        onClick={() => {
          document
            .getElementById("Skills")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        SKILLS
      </button>
      <button
        className="ContactMe"
        onClick={() => {
          document
            .getElementById("ContactMe")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        CONTACT ME
      </button>
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction" id="Home">
      <div className="in-left">
        <p className="in-left-top">Hello!</p>
        <p className="in-left-middle">
          <span className="iam">I am </span>
          <a href="https://github.com/shrestharukesh1213" className="user-name">
            Rukesh Shrestha
          </a>
        </p>
        <p className="in-left-bottom">Web & Flutter Developer</p>
        <br />
        <div className="intro-buttons">
          <a href="https://github.com/shrestharukesh1213">
            <img src={github64} width={64} alt="github-icon" />
          </a>
          <a href="https://github.com">
            <img src={linkedin} width={64} alt="linkedin-icon" />
          </a>
        </div>
      </div>
      <div className="in-right">
        <img className="profile-image" width={750} src={profile} alt="tom" />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about-me" id="AboutMe">
      <div className="about-me-title">About Me</div>
      <div className="about-me-desc">
        <div className="about-me-desc-left">
          <p>
            Aspiring Web and Flutter Developer currently majoring in Computer
            Science and Information Technology. Very enthusiastic about Coding
            New Technologies, and dabbling around with Linux distros in my free
            time. I have collaborated in a team environment on various projects
            during my studies which has helped in developing my teamwork and
            communication skills.
          </p>
          <br />
          <p>
            I have a solid foundation in subjects such as Data Structures and
            Algorithms, Web Design, Database, AI from my coursework. I am very
            eager for opportunities in this field to gain real world experience
            and level up my skills.
          </p>
        </div>
        <div className="about-me-desc-right">
          <img src={javascript} width={820} alt="" />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="skill-title">Skills</div>
      <div className="skills-list">
        <div className="logo-1">
          <img src={html} width={150} alt="html" />
          <p>HTML</p>
        </div>
        <div className="logo-2">
          <img src={css} width={150} alt="html" />
          <p>CSS</p>
        </div>
        <div className="logo-3">
          <img src={js} width={150} alt="html" />
          <p>JavaScript</p>
        </div>
        <div className="logo-4">
          <img src={react} width={150} alt="html" />
          <p>React</p>
        </div>
        <div className="logo-5">
          <img src={flutter} width={150} alt="html" />
          <p>Flutter</p>
        </div>
        <div className="logo-6">
          <img src={firebase} width={150} alt="html" />
          <p>Firebase</p>
        </div>
        <div className="logo-7">
          <img src={git} width={150} alt="html" />
          <p>Git</p>
        </div>
        <div className="logo-8">
          <img src={github} width={150} alt="html" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}

function Information() {
  return (
    <>
      <div className="contact-me" id="ContactMe">
        <div className="contact-me-title">Contact Me at:</div>
        <div className="contact-info">
          <div>Phone number: 123456789</div>
          <div>Email: shrestha.rukesh13@gmail.com</div>
          <div>WhatsApp: 123456789</div>
          <div>LinkedIn: Rukesh Shrestha</div>
        </div>
      </div>
    </>
  );
}
export default App;
