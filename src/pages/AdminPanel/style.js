import styled from "styled-components";

export const AdminPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const AdminPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  .logo__container {
    width: 222px;
    padding-right: 20px;
    margin-right: 20px;

    border-right: 4px solid rgba(0, 0, 0, 0.25);

    img {
      width: 100%;
    }
  }

  p {
    margin-right: auto;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.5px;

    color: var(--text);
  }

  button {
    border-radius: 6px;
    padding: 8px 15px;
    font-size: var(--text-paragraph);
    font-weight: 400;
    letter-spacing: 0.5px;
    cursor: pointer;

    background-color: var(--green);
    color: var(--white);
  }
`;

export const AdminPanelContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const AdminPanelMenu = styled.div`
  width: 240px;
  padding: 20px;

  border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

export const AdminPanelViews = styled.div`
  width: calc(100% - 240px);
  padding: 20px;
`;

// ------------------------------------- COMPONENTE DO MENU

export const Menu = styled.div`
  letter-spacing: 0.5px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    p {
      font-size: var(--title-paragraph);
      margin-bottom: 15px;
      text-transform: uppercase;

      color: var(--text);
    }

    button {
      width: 100%;
      font-size: var(--text-paragraph);
      font-weight: 300;
      text-align: left;
      border-radius: 6px;
      padding: 8px 15px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: 0.2s;
      background-color: rgba(0, 0, 0, 0.03);

      &:last-of-type {
        margin: 0;
      }

      &:hover {
        background: var(--orange);
        color: var(--white);
      }
    }
  }
`;
