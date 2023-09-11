import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const AttendanceContainer = styled(Container)`
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: var(--title);
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 15px;

    color: var(--green);
  }

  p {
    font-size: 20px;
    font-weight: 300;
    text-align: center;

    color: var(--text);
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`;
