import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./components/Introduction.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-body">
        <Introduction />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
