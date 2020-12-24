import React from "react";
import NavBar from "./components/Navbar";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div>
      <NavBar src={logo} alt="JSEEKR Logo" />
    </div>
  );
};

export default App;
