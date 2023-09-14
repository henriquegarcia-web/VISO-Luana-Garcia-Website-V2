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

export const AssessmentForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const AssessmentFormStages = styled.div`
  display: flex;
  padding: 0 11px 20px 0;
`

export const FormStageBar = styled.div`
  display: flex;
  width: 100%;
  height: 8px;
  border-radius: 20px;
  overflow: hidden;

  background-color: var(--orange-bar);
`

export const FormStageBarFill = styled.div`
  display: flex;
  width: ${(props) => `${props.fill}%`};
  height: 100%;
  border-radius: 20px;
  transition: 0.3s;

  background-color: var(--orange-bar-fill);
`

export const AssessmentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  flex: 1;
  max-height: 60vh;
  overflow: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }
`

export const AssessmentFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const AssessmentFormWrapperTitle = styled.h2`
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: var(--orange);
`

export const AssessmentFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  row-gap: 12px;
  padding-bottom: 5px;
`

export const AssessmentFormTable = styled.div`
  width: 100%;

  background-color: aliceblue;
  border: 1px solid lightblue;
  border-bottom: none;

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
    border-bottom: 1px solid lightblue;
  }

  /* th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.6);
  } */

  th {
    font-size: var(--assessment-legend);
    line-height: 2.2;
  }

  td {
    font-size: var(--assessment-legend);
    line-height: 1.8;
    text-align: left;
    padding-left: 14px;
  }
`

export const AssessmentInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
`

export const AssessmentInput = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
`

export const AssessmentFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 13px 0 0;
  column-gap: 10px;
`
