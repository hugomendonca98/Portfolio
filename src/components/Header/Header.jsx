import React from "react";
import { MDBContainer } from "mdbreact";
import { Link } from "react-scroll";

import ParticlesBk from "../particles/particles";
import { HeaderStyled } from "./styles";
import headerImg from "../../config/images/header-12.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="position">
        <ParticlesBk />
        <MDBContainer className="text-justify mt-5 pt-5">
          <div className="slide-top">
            <h3>{"Olá meu nome é Hugo Mendonça"}</h3>
            <h1>Sou Desenvolvedor Front End</h1>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              <button
                type="button"
                className="btn btn-outline-primary waves-effect btn-header"
              >
                Trabalhos
              </button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              <button
                type="button"
                className="btn btn-outline-primary waves-effect btn-header"
              >
                Contato
              </button>
            </Link>
          </div>
          <div className="header-illustration">
            <img src={headerImg} alt="Hugo Mendonça desenvolvedor frontend" />
          </div>
        </MDBContainer>
      </div>
    </HeaderStyled>
  );
};

export default Header;
