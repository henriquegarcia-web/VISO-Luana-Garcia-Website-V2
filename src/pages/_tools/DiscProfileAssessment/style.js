import styled from 'styled-components'

export const AssessmentLogin = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: rgba(238, 137, 93, 0.4);
`

export const AssessmentBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url('/login_bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
`

export const AssessmentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 75%;
  z-index: 10;
  padding: 30px;
  border-radius: 10px;
  margin: 0 30px;

  background-color: white;

  span {
    text-align: center;
    margin-bottom: 30px;

    h3 {
      font-size: var(--title);
      margin-bottom: 5px;

      color: var(--green);
    }

    p {
      /* font-size: var(--subtitle); */
      font-size: var(--title-paragraph);
      font-weight: 300;

      color: var(--green);
    }

    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
    }
  }

  a.backToMenu {
    position: absolute;
    bottom: 100%;
    left: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 14px 4px 8px;
    border-radius: 50px;
    transition: 0.2s;
    cursor: pointer;

    font-size: 15px;

    background-color: var(--light-orange);
    color: var(--white);

    svg {
      font-size: 18px;
      margin-right: 2px;
    }

    &:hover {
      background-color: var(--orange);
    }
  }
`

export const LogoContainer = styled.div`
  position: absolute;
  top: 30px;
  transition: 0.2s;

  img {
    height: 40px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const MessageContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  font-size: 15px;
  margin-top: 20px;
  text-align: right;
  line-height: 18px;

  color: var(--green);

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`
