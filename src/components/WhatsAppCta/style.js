import styled from "styled-components";

export const WhatsAppCta = styled.div`
  z-index: 100;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s;

  background-color: #25d366;
  outline: 6px solid rgba(40, 237, 114, 0.3);

  svg {
    font-size: 36px;
    color: var(--white);
  }

  .notification {
    position: absolute;
    bottom: 100%;
    right: -300px;
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 10px;
    border-radius: 6px;
    white-space: nowrap;
    margin-bottom: 20px;
    transition: 0.35s;

    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.5px;

    color: var(--text);
    background-color: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    outline: 8px solid rgba(40, 237, 114, 0.3);

    .notification {
      right: -8px;
    }
  }

  ::after {
    height: 20px;
    width: 100px;

    background-color: blue;
  }
`;

export const NotificationIndicator = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;

  font-size: 13px;
  font-weight: 600;

  color: white;
  background-color: red;
`;
