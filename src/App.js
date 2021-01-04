import React from "react";
import Darkmode from "darkmode-js";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import logo from "./assets/logo.svg";

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
        <Tablee />
        {darkmode.showWidget()}
      </div>
    </div>
  );
};

export default App;
