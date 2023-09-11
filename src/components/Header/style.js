import styled from "styled-components";

export const Header = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 20px;

  background-color: var(--white);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 1080px) {
    height: 70px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: auto;

  img {
    height: 100%;
  }

  a {
    height: 100%;
  }

  .blog__indicator {
    font-size: 22px;
    font-weight: 400;
    margin-left: 8px;
    padding-left: 8px;

    border-left: 2px solid var(--orange);
    color: var(--orange);
  }
`;

export const MenuContainer = styled.div`
  margin-left: auto;
  height: 100%;

  ul {
    display: flex;
    align-items: center;
    height: 100%;

    li {
      list-style: none;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        padding: 6px;
        margin: 20 2px;

        font-size: 16px;
        font-weight: 300;

        color: var(--text);

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: var(--orange);
          transition: width 0.3s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const CtaContainer = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 20px;

  button {
    width: fit-content;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: 0.3s;

    color: var(--white);
    background: var(--orange);

    &:hover {
      background: var(--light-orange);
    }
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const UserContainer1 = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;

  button {
    width: fit-content;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.5px;

    color: var(--white);
    background: var(--orange);
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const UserContainer2 = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;

  a {
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    /* text-transform: uppercase; */
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: 0.2s;

    color: var(--white);
    background: var(--orange);

    svg {
      font-size: 18px;
      margin-right: 10px;
    }

    b {
      margin-left: 4px;
    }

    &:hover {
      background: var(--light-orange);
      color: var(--white);
    }
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  position: relative;
  display: none;

  margin-left: 15px;

  @media screen and (max-width: 1080px) {
    display: flex;
  }
`;

export const MenuInput = styled.div`
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  svg {
    font-size: 23px;

    color: white;
    color: ${(props) => (props.isCloseIcon ? "white" : "black")};
  }
`;

export const MenuWrapper = styled.div`
  z-index: 11;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 360px;
  height: 100%;
  padding: 80px 20px 20px 20px;

  background-color: var(--orange);

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-bottom: auto;

    li {
      display: flex;
      list-style: none;
      width: 100%;
      margin-bottom: 10px;

      a {
        padding: 6px;
        width: 100%;

        font-size: 17px;
        font-weight: 400;

        color: var(--white);
      }
    }
  }

  .ctas {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;

      button {
        width: 100%;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        color: var(--white);
        background: var(--orange);
      }
    }

    .cta {
      display: flex;
      align-items: center;
      height: fit-content;
      margin-top: 15px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 100%;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.5px;

        color: var(--white);
        background: var(--orange);

        svg {
          font-size: 18px;
          margin-right: 10px;
        }

        b {
          margin-left: 4px;
        }
      }
    }
  }
`;
