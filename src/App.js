import React from "react";
import Darkmode from "darkmode-js";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import FooterPage from "./components/Footer/Footer";
import './App.css'
import logo from "./assets/logo.svg";
import clip from "./assets/clip.gif";

const App = () => {
  const options = {
    label: "🌓",
    time: "0.5s",
  };
  const darkmode = new Darkmode(options);

  return (
    <div>
      <NavBar src={logo} alt="JSEEKR Logo" />
      <div className="container">
      <img src={clip} className="clips mt-4"/>
        <Tablee />
        {darkmode.showWidget()}
      </div>
      <FooterPage />
    </div>
  );
};

export default App;
