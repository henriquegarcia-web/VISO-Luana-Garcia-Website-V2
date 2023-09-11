import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const AttendanceFormsContainer = styled(Container)`
  flex-direction: column;
`;

export const AttendanceFormWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const AttendanceForm = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% / 2) - 20px);

  /* border: 1px solid red; */

  h3 {
    font-size: var(--title-paragraph);
    font-weight: 600;
    margin-bottom: 20px;

    color: var(--green);
  }

  p {
    font-size: var(--text-paragraph);
    font-weight: 300;
    line-height: 3vh;
    text-align: justify;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    width: fit-content;
    min-width: 200px;
    height: fit-content;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s;

    margin-top: 20px;

    color: var(--white);
    background: var(--light-orange);

    &:hover {
      background: var(--orange);
    }

    a {
    }
  }

  &:first-of-type {
    margin-right: 20px;
  }

  &:last-of-type {
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;

    &:last-of-type {
      margin: 30px 0 0 0;
    }
  }

  @media screen and (max-width: 600px) {
    button {
      width: 100%;
    }
  }
`;
