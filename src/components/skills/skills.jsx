import React from "react";

import { SkillsStyled } from "./styles";
import thumb from "../../config/images/thumb.png";
import { MDBIcon, MDBTooltip } from "mdbreact";

import reactIcon from "../../config/images/react-icon.svg";
import htmlIcon from "../../config/images/html-icon.svg";
import cssIcon from "../../config/images/css-icon.svg";
import javascriptIcon from "../../config/images/javascript-icon.svg";
import gulpIcon from "../../config/images/gulp-icon.svg";
import wordpressIcon from "../../config/images/wordpress-icon.svg";
import webpackIcon from "../../config/images/webpack-icon.svg";
import photoshopIcon from "../../config/images/photoshop-icon.svg";

const Skills = () => {
  return (
    <SkillsStyled id="about">
      <div className="tittle">
        <h1>{"Sobre"}</h1>
      </div>
      <div className="skills">
        <div className="thumb">
          <img src={thumb} alt="" />
        </div>
        <h3>Hugo Mendonça</h3>
        <div className="social">
          <a href="https://github.com/hugomendonca98">
            <MDBIcon fab icon="github" />
          </a>
          <a href="https://www.linkedin.com/in/hugo-costa-597760177/">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
        <p>
          HELLO WORLD! Me chamo Hugo Mendonça, sou desenvolvedor frontend
          apaixonado por desenvolvimento web, sou programador não por formação
          mas por vocação, tenho atualmente 22 anos e resido em São paulo - SP.
        </p>
        <h3>Formação Proficional</h3>
        <h4>Curso Técnico: Produção e Design para Web - SENAC</h4>
        <p>
          Qualificar o aluno
          para atuar no planejamento, desenvolvimento e implementação de
          produtos para web e mídias digitais, considerando o tratamento de
          imagens digitais, a construção de arquivos vetoriais, a composição de
          layouts multiplataforma, de acordo com as tendências vigentes e as
          linguagens front-end.
        </p>
        <ul>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={htmlIcon} alt="" />
            </li>
            <span>HTML5</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={cssIcon} alt="" />
            </li>
            <span>CSS</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={javascriptIcon} alt="" />
            </li>
            <span>JAVASCRIPT</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={reactIcon} alt="" />
            </li>
            <span>REACT</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={gulpIcon} alt="" />
            </li>
            <span>GULP</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={wordpressIcon} alt="" />
            </li>
            <span>WORDPRESS</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={webpackIcon} alt="" />
            </li>
            <span>WEBPACK</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={photoshopIcon} alt="" />
            </li>
            <span>PHOTOSHOP</span>
          </MDBTooltip>
        </ul>
      </div>
    </SkillsStyled>
  );
};
export default Skills;
