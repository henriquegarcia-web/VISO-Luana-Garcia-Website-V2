import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Lexend Deca', sans-serif; */
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  scroll-behavior: smooth;

  :root {
    --white: #FFFFFF;

    --green: #7FB3AF;
    --light-green: #D8EAEE;
    --orange: #EE895D;
    --light-orange: #EDAE7B;

    --orange-disabled: #a2968c;
    
    --text: #252525;
    --light-text: #797979;

    --error: orangered;

    --orange-bar: #ffe9d7;
    --orange-bar-fill: #e67b23;

    /* --------------------------------- PARÁGRAFO */

    --text-paragraph: 16px;
    --title-paragraph: 19px;

    /* --------------------------------- TÍTULOS */

    --title: 28px;
    --subtitle: 22px;

    --assessment-title: 18px;
    --assessment-subtitle: 15px;
    --assessment-legend: 13px;
  }

  // ------------------------- SCROLL BAR

  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--light-orange);
    border-radius: 10px;
  }

  .modal_content {
    padding-right: 5px;
}
`

export default GlobalStyle

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;

  /* border: 2px solid red; */
`

// -------------------------------------- SECTION COMPONENTS

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  font-size: var(--subtitle);
  font-weight: 600;
  letter-spacing: 0.5px;

  color: var(--green);

  /* border: 2px solid red; */

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    margin-right: 15px;

    background-color: var(--green);

    svg {
      font-size: 19px;

      color: var(--white);
    }

    @media screen and (max-width: 800px) {
      width: 28px;
      height: 28px;

      svg {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    height: 40px;
    margin-bottom: 15px;
  }
`

export const SectionContent = styled.div`
  display: flex;
  height: fit-content;
  width: calc(100% - 15px);
  margin-left: 15px;
  padding: 15px 0 15px 33px;

  border-left: 3px solid var(--green);

  &.services__container {
    padding-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    width: calc(100% - 13px);
    margin-left: 13px;
    padding: 10px 10px 10px 29px;
  }
`

// -------------------------------------- INPUTS

export const InputText = styled.input`
  font-size: var(--text-paragraph);
  font-weight: 300;
  padding: 8px 14px;
  border-radius: 6px;
  letter-spacing: 0.5px;

  background-color: rgba(0, 0, 0, 0.05);
`

export const MainButton = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;

  color: var(--white);
  background: var(--light-orange);

  &:hover {
    background: var(--orange);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 6px 16px;
    color: var(--white);
  }
`
