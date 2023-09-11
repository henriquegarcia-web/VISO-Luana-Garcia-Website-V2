import styled from "styled-components";

export const LanguageContainer = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  margin-left: 10px;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 1080px) {
    margin-left: auto;
  }
`;

export const LanguageActive = styled.div`
  padding: 2px 8px;
  cursor: pointer;

  img {
    max-width: 35px;
  }

  @media screen and (max-width: 1080px) {
    padding: 0 5px;
  }
`;

export const LanguagesWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 4px;

  padding: 2px 8px;
  margin-top: 5px;
  background-color: white;
`;

export const LanguageItem = styled.div`
  pointer-events: ${(props) => (props.isInactive ? "none" : "all")};

  img {
    max-width: 35px;
    opacity: ${(props) => (props.isSelected ? 1 : 0.4)};
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
