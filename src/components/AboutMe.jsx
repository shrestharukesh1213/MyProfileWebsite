import javascript from "../assets/jsmin.png";

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
          <img className="image-js" src={javascript} alt="JavaScript" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
