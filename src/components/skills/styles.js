import styled from "styled-components";

import { primaryColor, whiteColor } from "../../global/colors";

export const SkillsStyled = styled.div`
  font-family: "Alata", sans-serif;
  margin-bottom: 70px;
  margin-top: 200px;
  div.tittle {
    font-family: "Alata", sans-serif;
    width: 200px;
    height: 25px;
    margin: auto;
    background-color: #2f2e41;
    margin-bottom: 50px;
    h1 {
      position: relative;
      bottom: 30px;
      text-align: center;
      color: ${primaryColor};
    }
  }

  div.skills {
    div.thumb {
      width: 210px;
      margin: auto;
      img {
        width: 200px;
        border-radius: 50% !important;
      }
    }
    h3 {
      color: ${primaryColor};
      text-align: center;
      margin: 10px;
    }
    div.social {
      display: flex;
      justify-content: center;
      color: ${primaryColor};
      a {
        text-decoration: none;
        color: ${whiteColor};
        i {
          margin: 10px;
          font-size: 30px;
        }
      }
      a:hover {
        color: ${primaryColor};
      }
    }
    h4 {
      color: ${primaryColor};
      text-align: center;
    }
    p {
      color: white;
      text-align: center;
      width: 600px;
      margin: auto;
    }
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      max-width: 600px;
      margin: auto;
      flex-wrap: wrap;
      li {
        margin: 10px;
        text-align: center;
        color: ${primaryColor};
        padding: 10px;
        background-color: ${whiteColor};
        border-radius: 5px;
        cursor: pointer;
        img {
          width: 40px;
        }
      }
    }
  }
  @media (max-width: 655px) {
    div.skills {
      p {
        width: 450px;
      }
      ul {
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: 480px) {
    div.skills {
      p {
        width: auto;
        padding: 10px;
      }
      ul {
        flex-wrap: wrap;
      }
    }
  }
`;
