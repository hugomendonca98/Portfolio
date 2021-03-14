import React from "react";

import { Link } from "react-scroll";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBarStyled } from "./Styles";
import { bgDarkCustom, whiteColor } from "../../global/colors";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

class FixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <MDBNavbar
            style={bgDarkCustom}
            dark
            expand="md"
            scrolling
            fixed="top"
          >
            <MDBNavbarBrand>
              <Link
                style={{ marginTop: "10px" }}
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <strong>{"{ Hugo Mendonça } "}</strong>
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <NavBarStyled>
                  <Link
                    style={{ marginTop: "10px" }}
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    Home
                  </Link>
                  <Link
                    style={{ marginTop: "10px" }}
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                  <Link
                    style={{ marginTop: "10px" }}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    Sobre
                  </Link>
                  <Link
                    style={{ marginTop: "10px" }}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    Contato
                  </Link>
                </NavBarStyled>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <a
                  style={{
                    color: whiteColor,
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  href="https://github.com/hugomendonca98"
                >
                  <MDBIcon fab icon="github" /> GitHub
                </a>
                <a
                  style={{
                    color: whiteColor,
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  href="https://www.linkedin.com/in/hugo-mendonça-frontend/"
                >
                  <MDBIcon fab icon="linkedin-in" /> Linkedin
                </a>
                <a
                  style={{
                    color: whiteColor,
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  href="mailto:contato@hugomendonca.net"
                >
                  <MDBIcon far icon="envelope-open" /> Email
                </a>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}

export default FixedNavbar;
