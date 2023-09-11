import styled from 'styled-components'

export const AssessmentLogin = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;

  input {
    margin-bottom: 10px;

    background-color: rgba(238, 137, 93, 0.1);

    &:last-of-type {
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const AssessmentLoginButton = styled.button`
  font-size: var(--text-paragraph);
  font-weight: 300;
  padding: 8px 14px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: 0.2s;

  color: var(--white);
  background: ${(props) =>
    props.disabled ? 'var(--orange-disabled)' : 'var(--light-orange)'};

  &:hover {
    /* background: var(--orange); */
    background: ${(props) =>
      props.disabled ? 'var(--orange-disabled)' : 'var(--orange)'};
  }
`
