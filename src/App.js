import React from "react";
import Darkmode from "darkmode-js";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import "./App.css";
import clip from "./assets/clip.gif";
import logo from "./assets/logo.svg";
import Footer from "./components/Footer/Footer";

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
        <img src={clip} className="clips mt-4" />
        <Tablee />
        {darkmode.showWidget()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
