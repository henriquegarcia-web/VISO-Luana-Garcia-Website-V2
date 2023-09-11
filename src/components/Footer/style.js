import styled from "styled-components";

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 20px;
  font-size: 14px;
  letter-spacing: 0.5px;

  background-color: var(--orange);
  color: var(--white);

  @media screen and (max-width: 600px) {
    padding: 8px 20px;
  }

  .desktop__footer {
    display: flex;

    b {
      font-weight: 500;

      &:first-of-type {
        margin-right: 5px;
      }

      &:last-of-type {
        margin-left: 5px;
      }
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .mobile__footer {
    display: none;
    flex-direction: column;
    font-size: 13px;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 600px) {
      display: flex;
    }
  }
`;
