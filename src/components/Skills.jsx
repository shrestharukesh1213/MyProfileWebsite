import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import flutter from "../assets/flutter.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import firebase from "../assets/firebase.svg";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="skill-title">Skills</div>
      <div className="skills-list">
        <div className="logo-1">
          <img src={html} className="skill-icon" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="logo-2">
          <img src={css} className="skill-icon" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="logo-3">
          <img src={js} className="skill-icon" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="logo-4">
          <img src={react} className="skill-icon" alt="React" />
          <p>React</p>
        </div>
        <div className="logo-5">
          <img src={flutter} className="skill-icon" alt="Flutter" />
          <p>Flutter</p>
        </div>
        <div className="logo-6">
          <img src={firebase} className="skill-icon" alt="Firebase" />
          <p>Firebase</p>
        </div>
        <div className="logo-7">
          <img src={git} className="skill-icon" alt="Git" />
          <p>Git</p>
        </div>
        <div className="logo-8">
          <img src={github} className="skill-icon" alt="GitHub" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
