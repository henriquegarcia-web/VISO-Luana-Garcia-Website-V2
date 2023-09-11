import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const ThanksContainer = styled(Container)`
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  .thanks_text {
    text-align: right;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.5px;

    color: var(--light-orange);

    b {
      font-weight: 800;
      margin-bottom: 5px;

      color: var(--orange);
    }

    .thanks_links {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-right: 8px;
        border-radius: 100%;
        transition: 0.2s;

        color: var(--white);
        background-color: var(--green);

        svg {
          font-size: 22px;
        }

        &:last-of-type {
          margin: 0;
        }

        &:hover {
          background: var(--orange);
        }
      }

      @media screen and (max-width: 800px) {
        justify-content: center;
        margin-bottom: 20px;
      }
    }

    @media screen and (max-width: 800px) {
      text-align: center;
    }
  }

  img {
    max-width: 260px;
    width: 60%;
  }
`;
