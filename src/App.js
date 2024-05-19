// import logo from './logo.svg';
import "./App.css";

import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Project from "./Projects/Project";
import Contactus from "./Contactus/Contactus";

function App() {
  const handleButton1Click = () => {
    const targetElement = document.querySelector(".homemain");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Adds a smooth scrolling animation
        block: "start", // Scrolls to the top of the target element
      });
    }
  };

  const handleButton2Click = () => {
    const targetElement = document.querySelector(".aboutusmain");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Adds a smooth scrolling animation
        block: "start", // Scrolls to the top of the target element
      });
    }
  };

  const handleButton3Click = () => {
    const targetElement = document.querySelector(".projectmain");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Adds a smooth scrolling animation
        block: "start", // Scrolls to the top of the target element
      });
    }
  };
  const handleButton4Click = () => {
    const targetElement = document.querySelector(".contactusmain");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Adds a smooth scrolling animation
        block: "start", // Scrolls to the top of the target element
      });
    }
  };
  return (
    <div className="App">
      <div className="navbar">
        <div className="taplinc">Taplinc</div>
        <div className="navbarcontent">
          <button className="home" onClick={handleButton1Click}>
            Home
          </button>
          <button className="Aboutus" onClick={handleButton2Click}>
            About Us
          </button>
          <button className="Project" onClick={handleButton3Click}>
            Projects
          </button>
          <button className="contactus" onClick={handleButton4Click}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="main-content">
      <div className="homemain">
        <Home />
      </div>
      <div className="aboutusmain">
        <Aboutus />
      </div>
      <div className="projectmain">
        <Project />
      </div>
      <div className="contactusmain">
        <Contactus />
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
