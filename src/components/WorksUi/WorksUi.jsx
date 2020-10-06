/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { WorksStyled } from "./styles";
import { MDBIcon } from "mdbreact";

const WorkCard = ({ title, description, workImg, externalLink, imgAlt }) => {
  return (
    <WorksStyled>
      <div className="work-img">
        <img src={workImg} alt={imgAlt} />
      </div>
      <div className="work-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a target="_blank" href={externalLink}>Ver Projeto</a>
          <MDBIcon className="slide-right" icon="arrow-right" />
        </div>
      </div>
    </WorksStyled>
  );
};

export default WorkCard;
