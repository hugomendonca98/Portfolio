import React from "react";

import { WorksStyled } from "./styles";
import LuxuryRestaurantImg from "../../config/images/teste.png";
import SpotifyCloneImg from "../../config/images/Spotify-home-page.png";
import NationsProject from "../../config/images/Opera Instantâneo_2020-05-16_210455_react-nations.netlify.app.png";
import Shortly from "../../config/images/Opera Instantâneo_2020-05-16_210625_shortly-react.netlify.app.png";
import FelipeImportadoss from "../../config/images/Opera Instantâneo_2020-05-16_221341_felipeimportadoss.com.png";
import easyBank from '../../config/images/desktop-preview.jpg';

const Works = () => {
  return (
    <WorksStyled id="portfolio">
      <div className="tittle">
        <h1>Trabalhos</h1>
      </div>
      <div className="wrap">
      <div className="card-work">
          <div className="card-img">
            <img src={easyBank} alt="" />
          </div>
          <h3>Luxury Restaurant Website</h3>
          <div className="card-btn">
            <a href="https://hugomendonca98.github.io/luxury-restaurant-website/">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <a href="https://github.com/hugomendonca98/luxury-restaurant-website">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fab fa-github"></i> Código Fonte
              </button>
            </a>
          </div>
        </div>
        <div className="card-work">
          <div className="card-img">
            <img src={LuxuryRestaurantImg} alt="" />
          </div>
          <h3>Luxury Restaurant Website</h3>
          <div className="card-btn">
            <a href="https://hugomendonca98.github.io/luxury-restaurant-website/">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <a href="https://github.com/hugomendonca98/luxury-restaurant-website">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fab fa-github"></i> Código Fonte
              </button>
            </a>
          </div>
        </div>
        <div className="card-work">
          <div className="card-img">
            <img src={SpotifyCloneImg} alt="" />
          </div>
          <h3>Spotify Home Page</h3>
          <div className="card-btn">
            <a href="https://hugomendonca98.github.io/Spotify-Home-Page-Clone/">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <a href="https://github.com/hugomendonca98/Spotify-Home-Page-Clone">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fab fa-github"></i> Código Fonte
              </button>
            </a>
          </div>
        </div>
        <div className="card-work">
          <div className="card-img">
            <img src={Shortly} alt="" />
          </div>
          <h3>Shortly Encurtador de url</h3>
          <div className="card-btn">
            <a href="https://shortly-react.netlify.app/">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <a href="https://github.com/hugomendonca98/Shortly">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fab fa-github"></i> Código Fonte
              </button>
            </a>
          </div>
        </div>
        <div className="card-work">
          <div className="card-img">
            <img src={NationsProject} alt="" />
          </div>
          <h3>Nations Website</h3>
          <div className="card-btn">
            <a href="https://react-nations.netlify.app/">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <a href="https://github.com/hugomendonca98/Nations-React">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fab fa-github"></i> Código Fonte
              </button>
            </a>
          </div>
        </div>
        <div className="card-work">
          <div className="card-img">
            <img src={FelipeImportadoss} alt="" />
          </div>
          <h3>Felipe Importadoss</h3>
          <div className="card-btn">
            <a href="https://felipeimportadoss.com">
              <button type="button" className="btn btn-lg btn-live">
                <i className="fas fa-eye"></i> Visualizar
              </button>
            </a>
            <button type="button" className="btn btn-lg btn-live">
              <i className="fab fa-github"></i> Código Fonte
            </button>
          </div>
        </div>

      </div>
    </WorksStyled>
  );
};

export default Works;
