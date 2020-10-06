import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  color: white;
  a {
    margin: 0 10px;
    text-decoration: none !important;
    color: white !important;
    font-family: "alata" sans-serif;
    font-size: 17px;
    margin-bottom: 5px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    a {
        text-align: justify;
        display: flex;
        justify-content: justify;
    }
  }
`;
