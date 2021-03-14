import styled from "styled-components";

import { primaryColor, primaryDarkColor } from "../../global/colors";

export const HeaderStyled = styled.header`
  canvas {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
  }

  div.position {
    position: relative;
    top: 0;
  }

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 150px !important;
    padding-bottom: 150px;
    margin-bottom: 100px;

    button.btn-header {
      padding: 10px 20px;
      border: 2px solid ${primaryColor} !important;
      color: #fff !important;
      background-color: ${primaryDarkColor} !important;
    }

    button.btn-header:hover {
      box-shadow: 0 2px 5px 0 rgba(163, 247, 181, 0.16),
        0 2px 10px 0 rgba(163, 247, 181, 0.12);
    }

    div.header-illustration {
      img {
        width: 580px;
      }
    }

    h1 {
      font-size: 60px;
      color: #fff;
    }

    h3 {
      font-family: "Alata", sans-serif;
      font-size: 20px;
      color: ${primaryColor};
    }

    .slide-top {
      -webkit-animation: slide-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
  @media (max-width: 1060px) {
    div.container {
      h1 {
        font-size: 50px;
      }
      div.header-illustration {
        img {
          width: 480px;
        }
      }
    }
  }
  @media (max-width: 997px) {
    div.container {
      h1 {
        font-size: 60px;
      }
      div.header-illustration {
        img {
          width: 380px;
        }
      }
    }
  }
  @media (max-width: 936px) {
    div.container {
      h1 {
        font-size: 50px;
      }
    }
  }
  @media (max-width: 790px) {
    div.container {
      h1 {
        font-size: 50px;
      }
      div.header-illustration {
        img {
          width: 300px;
        }
      }
    }
  }
  @media (max-width: 770px) {
    div.container {
      flex-direction: column;
      padding-top: 0px;
      h1 {
        font-size: 75px;
        margin-right: 20px;
        margin-left: 10px;
      }
      div.header-illustration {
        img {
          width: 380px;
          display: none;
        }
      }
    }
  }
  @media (max-width: 580px) {
    div.container {
      h1 {
        font-size: 55px;
      }
    }
  }
  @media (max-width: 470px) {
    div.container {
      h1 {
        font-size: 45px;
      }
    }
  }
  @media (max-width: 365px) {
    div.container {
      h1 {
        font-size: 35px;
      }
      h3 {
        font-size: 17px;
      }
    }
  }
`;
