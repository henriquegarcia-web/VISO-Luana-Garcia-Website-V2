import styled from "styled-components";

export const HomePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  scroll-behavior: smooth;
`;

export const Page = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 20px 20px;

  @media screen and (max-width: 800px) {
    padding: 40px 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 80px 20px 0 20px;
  }

  &:first-of-type {
    height: 100vh;
    padding: 80px 20px 0 20px;

    @media screen and (max-width: 600px) {
      padding: 40px 20px 0 20px;
    }
  }

  &:last-of-type {
    height: 100vh;
    padding: 60px 20px 60px 20px;
  }
`;
