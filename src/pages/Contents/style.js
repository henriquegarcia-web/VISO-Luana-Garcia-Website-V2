import styled from "styled-components";

export const ContentsPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 100px 0 20px 0;
  margin: 0 20px;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s;
    padding: 6px 14px 6px 10px;

    color: var(--white);
    background: var(--light-orange);

    &:hover {
      background: var(--orange);
    }

    svg {
      font-size: 20px;
      margin-right: 4px;
    }
  }
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 80px);
`;

export const ContentsAdvice = styled.div`
  width: 100%;
  max-width: 300px;
  padding-bottom: 100px;

  text-align: center;
  font-size: 30px;
  font-weight: 300;

  color: var(--text);
`;
