import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const AboutMeContainer = styled(Container)`
  flex-direction: column;

  color: var(--text);
`;

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const AboutMeTextContainer = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  padding-left: 40px;

  p {
    font-size: var(--text-paragraph);
    font-weight: 300;
    line-height: 3vh;
    text-align: justify;
    margin: 0;

    h3 {
      margin: 0;
      font-size: var(--title-paragraph);
      font-weight: 600;
      margin: 30px 0 12px 0;

      color: var(--green);
    }
  }

  div.skills {
    h3 {
      margin: 0;
      font-size: var(--title-paragraph);
      font-weight: 600;
      margin: 30px 0 14px 0;

      color: var(--green);
    }
  }

  div.skills__container {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-left: 0;
    height: fit-content;
  }
`;

export const AboutMeImageContainer = styled.div`
  width: 400px;
  height: 360px;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const Skills = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 50px;
  padding: 5px 14px;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0 10px 10px 0;

  color: var(--white);
  background-color: var(--orange);
`;
