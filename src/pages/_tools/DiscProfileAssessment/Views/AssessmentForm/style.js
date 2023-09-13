import styled from 'styled-components'

export const AssessmentFormHeader = styled.div`
  font-size: var(--assessment-title);
  font-weight: 500;
  text-transform: uppercase;

  color: var(--orange);

  b {
    font-weight: 800;
  }
`

export const AssessmentFormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 60vh;
  overflow: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }
`

export const AssessmentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  row-gap: 15px;
  padding-bottom: 5px;
`

export const AssessmentFormTable = styled.div`
  width: 100%;

  h4 {
    font-size: var(--assessment-legend);
    line-height: var(--assessment-legend);
    font-weight: 600;
    text-transform: uppercase;

    color: var(--text);
  }

  table {
    width: 100%;
  }

  tr {
    text-align: center;
  }

  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

  th {
    font-size: var(--assessment-legend);
    line-height: 2.2;
  }

  td {
    font-size: var(--assessment-legend);
    line-height: 1.8;
    text-align: center;

    .answer_container {
      display: flex;
      justify-content: center;
      column-gap: 10px;
    }

    .answer_input {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 5px;

      input {
        cursor: pointer;
      }
    }
  }
`

export const AssessmentInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;
`

export const AssessmentInput = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
`

export const AssessmentFormFooter = styled.div`
  display: flex;
  column-gap: 10px;
`
