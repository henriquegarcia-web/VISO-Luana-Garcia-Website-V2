import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const MissionContainer = styled(Container)`
  flex-direction: column;

  color: var(--text);

  .section {
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }
`;

export const MissionTextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 40px;

  p {
    font-size: var(--text-paragraph);
    font-weight: 300;
    line-height: 3vh;
    text-align: justify;
    margin-bottom: 40px;

    h3 {
      font-size: var(--title-paragraph);
      font-weight: 600;
      margin-bottom: 20px;

      color: var(--green);
    }
  }

  div.skills {
    h3 {
      font-size: var(--subtitle);
      font-weight: 600;
      margin-bottom: 20px;

      color: var(--green);
    }
  }

  div.skills__container {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
    padding-bottom: 30px;
  }

  /* border: 2px solid red; */
`;

// export const MissionImageContainer = styled.div`
//   width: 40%;
//   height: 420px;
//   overflow: hidden;
//   border-radius: 6px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   @media screen and (max-width: 1200px) {
//     width: 100%;
//   }
// `;

// @media screen and (min-width: 600px)

export const Skills = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 50px;
  padding: 6px 14px;
  font-size: var(--text-paragraph);
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0 10px 10px 0;

  color: var(--white);
  background-color: var(--orange);
`;
