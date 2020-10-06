import styled from "styled-components";

import {
  secundaryDarkColor,
  primaryColor,
  whiteColor,
} from "../../config/colors";

import cardBG from "../../config/images/bg-card-3.png";

export const WorksStyled = styled.div`
  background-image: url(${cardBG}) !important;
  background-repeat: no-repeat;
  background-position: bottom -50px left;
  background-size: 550px;
  background-color: ${secundaryDarkColor};
  display: flex;
  align-items: center;
  width: 90vw;
  margin: auto;
  margin-bottom: 50px;
  border-radius: 10px;
  flex-direction: row-reverse;
  .work-img-two {
    img {
      width: 50vw;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .work-text-two {
    text-align: justify;
    padding: 20px;
    h3 {
      color: ${primaryColor};
      font-weight: 700;
    }
    p {
      color: ${whiteColor};
      text-align: justify !important;
    }
    div {
      display: flex;
      align-items: center;
      a {
        color: ${primaryColor} !important;
        font-weight: 700;
        text-decoration: none;
        font-family: "Alata", sans-serif;
        margin-bottom: 3px;
        margin-right: 5px;
      }
    }
  }

  .slide-right {
    -webkit-animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      infinite both;
    animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;
    color: ${primaryColor};
  }

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @media (min-width: 200px) and (max-width: 1035px) {
    flex-direction: column;
    width: 85%;
    padding-bottom: 130px;
    background-size: 100%;
    .work-img-two {
      img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 0px;
      }
    }

    .work-text-two {
      h3 {
        text-align: center;
      }
    }
  }
`;
