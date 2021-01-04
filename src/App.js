import React from "react";
import NavBar from "./components/Navbar";
import Tablee from "./components/Table/Table";
import FooterPage from "./components/Footer/Footer";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div>
      <NavBar src={logo} alt="JSEEKR Logo" />
      <div className="container">
        <Tablee />
      </div>
      <FooterPage />
    </div>
  );
};

export default App;
