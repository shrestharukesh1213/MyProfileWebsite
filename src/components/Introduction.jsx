import profile from "../assets/tom.jpg";
import linkedin from "../assets/linkedin.png";
import github64 from "../assets/github64.png";

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
            <img src={github64} className="intro-icon" alt="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/shrestharukesh/">
            <img src={linkedin} className="intro-icon" alt="linkedin-icon" />
          </a>
        </div>
      </div>
      <div className="in-right">
        <img className="profile-image" src={profile} alt="Profile" />
      </div>
    </div>
  );
}

export default Introduction;
