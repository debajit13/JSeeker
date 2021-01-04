import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 mb-4">
      <MDBContainer fluid className="text-md-left">
        <MDBRow>
          <MDBCol className="col-xs-12 center-block text-center">
            <h3 className="title footer-text">About Us</h3>
            <p className="footer-text">
              Made with ❤️ and ☕ by
              <a
                href="https://www.linkedin.com/in/sankalan-dasgupta-ba390616a/"
                target="_blank"
              >
                {" "}
                Sankalan{" "}
              </a>
              &
              <a
                href="https://www.linkedin.com/in/debajit-mallick/"
                target="_blank"
              >
                {" "}
                Debajit
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
