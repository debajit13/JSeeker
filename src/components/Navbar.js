import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">
          <img src={props.src} alt={props.alt} height="50px" width="70px" />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;
