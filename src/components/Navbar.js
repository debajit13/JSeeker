import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Navbar.css";

const NavBar = (props) => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="#">
          <p>
            <img src={props.src} alt={props.alt} height="50px" width="70px" />
            <span className="brand-name">Jseekr</span>
          </p>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;
