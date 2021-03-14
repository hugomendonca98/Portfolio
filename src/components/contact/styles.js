import styled from "styled-components";
import { primaryColor } from "../../global/colors";

export const ContactStyled = styled.div`
  font-family: "Alata", sans-serif;
  margin-top: 150px;
  margin-bottom: 100px;
  div.contact-img {
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    img {
      width: 400px;
      height: 210px;
      margin-bottom: 0px;
    }
  }
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
  div.email {
    text-align: center;
    margin: auto;
    width: 350px;
    margin-bottom: 30px;
    a {
      text-decoration: none;
      color: #2f2e41;
      padding: 10px 50px;
      background-color: ${primaryColor};
      border: none;
      border-radius: 15px;
      i {
        margin-right: 5px;
      }
    }
  }
  p {
    text-align: center;
    color: white;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    input[type="text"],
    input[type="email"],
    input[name*="message"] {
      background-color: #2f2e41;
      border: 2px solid #4e4d54;
      border-radius: 2px;
      color: white;
      width: 360px;
      padding: 10px;
      margin: 10px 10px;
    }
    input[name*="message"] {
      height: 100px;
      width: 740px;
    }
    button[type="submit"] {
      background-color: ${primaryColor};
      color: #2f2e41;
      border: none;
      border-radius: 5px;
      width: 350px;
      padding: 10px 0px;
      margin-top: 30px;
    }
    button:disabled {
      background-color: gray;
      color: #2f2e41;
    }
    div.contact-flex {
      display: flex;
      div {
        text-align: justify;
      }
    }
    div.error {
      color: #ff1111;
      text-align: justify;
      margin-left: 10px;
    }
    div.success {
      color: green;
      margin-top: 10px;
    }
  }
  @media (max-width: 803px) {
    form {
      input[name*="message"] {
        width: 360px;
      }
      div.contact-flex {
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
      }
    }
  }
  @media (max-width: 440px) {
    div.contact-img {
      img {
        width: 250px;
      }
    }
    div.email {
      width: 250px;
      a {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
    form {
      input[type="text"],
      input[type="email"],
      input[name*="message"] {
        width: 250px;
      }
      input[name*="message"] {
        width: 250px;
      }
      button[type="submit"] {
        width: 250px;
      }
    }
  }
`;
