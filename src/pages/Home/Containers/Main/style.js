import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const MainContainer = styled(Container)``;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  letter-spacing: 0.5px;

  p {
    font-size: 22px;
    font-weight: 500;
    font-style: italic;
    /* text-transform: uppercase; */
    margin-bottom: 35px;

    color: var(--light-orange);
  }

  h1,
  h2 {
    font-weight: 600;

    color: var(--green);
  }

  h2 {
    font-size: 48px;
    margin-bottom: 10px;

    b {
      color: var(--orange);
    }
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 32px;

    span {
      margin-bottom: 2px;
    }
  }

  @media screen and (max-width: 800px) {
    width: 60%;

    h2 {
      font-size: 42px;
    }

    h1 {
      font-size: 34px;

      span {
        margin-bottom: 6px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    p {
      text-align: center;
    }

    h2 {
      font-size: 38px;
      text-align: center;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 24px;
      text-align: center;
    }
  }
`;

export const CtasContainer = styled.div`
  display: flex;
  margin-top: 40px;

  button {
    margin-right: 15px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    button {
      width: 100%;
      margin-bottom: 10px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: center;

    button {
      font-size: 15px;
      font-weight: 400;
      margin-right: 0;

      a {
        padding: 5px 0px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 30%;
  height: 90%;
  margin-top: auto;

  img {
    position: absolute;
    height: 105%;
    right: 0;
    z-index: 5;
  }

  @media screen and (max-width: 900px) {
    img {
      /* transform: translateX(80px); */
    }
  }

  @media screen and (max-width: 800px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
