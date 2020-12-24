import React from "react";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div>
      <NavBar src={logo} alt="JSEEKR Logo" />
      <div className="container">
        <Tablee />
      </div>
    </div>
  );
};

export default App;
