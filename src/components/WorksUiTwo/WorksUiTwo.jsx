import React from "react";

import { WorksStyled } from "./styles";
import { MDBIcon } from "mdbreact";

const WorkCardTwo = ({ title, description, workImg, externalLink, imgAlt }) => {
  return (
    <WorksStyled>
      <div className="work-img-two">
        <img src={workImg} alt={imgAlt} />
      </div>
      <div className="work-text-two">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a href={externalLink}>Ver Projeto</a>
          <MDBIcon className="slide-right" icon="arrow-right" />
        </div>
      </div>
    </WorksStyled>
  );
};

export default WorkCardTwo;