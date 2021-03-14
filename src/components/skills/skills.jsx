import React from "react";

import { SkillsStyled } from "./styles";
import thumb from "../../assets/images/thumb.jpg";
import { MDBIcon, MDBTooltip } from "mdbreact";

import reactIcon from "../../assets/images/react-icon.svg";
import htmlIcon from "../../assets/images/html-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import javascriptIcon from "../../assets/images/javascript-icon.svg";
import gulpIcon from "../../assets/images/gulp-icon.svg";
import wordpressIcon from "../../assets/images/wordpress-icon.svg";
import webpackIcon from "../../assets/images/webpack-icon.svg";
import photoshopIcon from "../../assets/images/photoshop-icon.svg";
import typescriptlang from '../../assets/images/typescriptlang-icon.svg';
import nodeJs from '../../assets/images/nodejs-icon.svg';
import postgresSql from '../../assets/images/postgresql.svg';
import express from '../../assets/images/express.svg';
import mongodb from '../../assets/images/mongodb.svg';

const Skills = () => {
  return (
    <SkillsStyled id="about">
      <div className="tittle">
        <h1>{"Sobre"}</h1>
      </div>
      <div className="skills">
          
        <div className="thumb">
          <img src={thumb} alt="thumb-hugo-mendoça" />
        </div>
        <h3>Hugo Mendonça</h3>
        <div className="social">
          <a href="https://github.com/hugomendonca98">
            <MDBIcon fab icon="github" />
          </a>
          <a href="https://www.linkedin.com/in/hugo-mendonça-frontend/">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
        <br />
        <br />
        <h3>Linguagens & Frameworks</h3>
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
              <img src={typescriptlang} alt="" />
            </li>
            <span>TYPESCRIPT</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={reactIcon} alt="" />
            </li>
            <span>REACT JS / REACT NATIVE</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={nodeJs} alt="" />
            </li>
            <span>NODE.JS</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={express} alt="" />
            </li>
            <span>EXPRESS.JS</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={postgresSql} alt="" />
            </li>
            <span>POSTGRESQL</span>
          </MDBTooltip>
          <MDBTooltip domElement tag="span" placement="bottom">
            <li>
              <img src={mongodb} alt="" />
            </li>
            <span>MONGODB</span>
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
        <br/>
        <br/>
        <h3>Um pouco sobre min...</h3>
        <p>
          Sou desenvolvedor full stack junior apaixonado por desenvolvimento web, stack principal para projetos React, React Native e NodeJs.
          Minha maior paixão sempre foi contruir sites, des do dia que tive o primeiro contato com o desenvolvimento web decidi que era isso que queria para minha vida, com o foco sempre em evoluir e aprender para acompanhar as mundaças de tecnologias.
        </p>
        <br />
        <br />

        <h3>Formação Proficional</h3>
        <br/>
        <h4>Rocketseat - Bootcamp Gostack 14</h4>
        <h4>Desenvolvedor full stack, React, React native e Nodejs</h4>
        <p>
          O GoStack é um treinamento online, prático e intensivo. No GoStack o aluno vai a fundo nas tecnologias NodeJS, ReactJS e React Native e todo o ecossistema ao redor dessas ferramentas, do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores e todas as bibliotecas e frameworks importantes para quem deseja ficar pronto para os desafios do mundo real e se destacar no mercado de trabalho.
        </p>
        <br/>
        <h4>Senac - Curso Técnico - Produção e Design para Web</h4>
        <p>
          Qualificar o aluno
          para atuar no planejamento, desenvolvimento e implementação de
          produtos para web e mídias digitais, considerando o tratamento de
          imagens digitais, a construção de arquivos vetoriais, a composição de
          layouts multiplataforma, de acordo com as tendências vigentes e as
          linguagens front-end.
        </p>
        <br/>
        <h4>Senai - Ensino Técnico - Desenvolvedor web full stack (Cursando)</h4>
        <p>
          Formação tem como foco habilitar os alunos a trabalharem com softwares livres ou de código aberto e, ao fim do curso, o aluno será um desenvolvedor web full stack e sairá com o diploma com habilitação de técnico de informática para a internet apto a:

          criar interfaces web, para sites ou apps;
          prototipar aplicações on-line;
          estruturar bancos de dados;
          desenvolver códigos nas principais linguagens de programação web: HTML5, CCS3 e JavaScript.
        </p>
        <br/>
        
      </div>
    </SkillsStyled>
  );
};
export default Skills;
