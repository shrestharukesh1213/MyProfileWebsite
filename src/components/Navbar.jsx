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

export default Navbar;
