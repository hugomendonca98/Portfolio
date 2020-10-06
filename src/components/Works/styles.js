import styled from "styled-components";

import { primaryColor } from "../../config/colors";
import BGCard from "../../config/images/bg-card-3.png";

export const WorksStyled = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  font-family: "Alata", sans-serif;
  div.tittle {
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
  div.wrap {
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: auto;
  }
  div.card-work {
    background-image: url(${BGCard}) !important;
    background-position: bottom -40px center;
    background-size: 350px;
    background-repeat: no-repeat;
    width: 350px;
    text-align: center;
    border: solid 3px #2f2e41;
    border-radius: 4px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
    padding-bottom: 45px;
    background-color: rgba(28, 28, 28, 1);
    color: white;
    -webkit-box-shadow: inset 0px -58px 69px -111px rgba(47, 156, 149, 1);
    -moz-box-shadow: inset 0px -58px 69px -111px rgba(47, 156, 149, 1);
    box-shadow: inset 0px -58px 69px -111px rgba(47, 156, 149, 1);

    h3 {
      margin-top: 20px;
      font-size: 24px;
      color: ${primaryColor};
    }
  }

  div.card-img {
    img {
      width: 345px;
      border-radius: 4px;
    }

    img:hover {
      transition: all 400ms;
      opacity: 1;
    }
  }

  .works {
    margin-bottom: 60px;
  }

  button.btn-live {
    padding: 3px 5px;
    border: 2px solid #2f2e41;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
  button.btn-live:hover {
    transition: 500ms;
    border: solid 2px ${primaryColor};
  }

  @media (max-width: 1251px) {
    div.card-work {
      margin: 10px;
      justify-content: center;
    }
  }
  @media (max-width: 411px) {
    div.card-work {
      width: 250px;
    }
    div.card-img {
      img {
        width: 245px;
      }
    }
    button.btn-live {
      font-size: 12px;
    }
  }
`;
