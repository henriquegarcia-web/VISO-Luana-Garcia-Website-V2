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

// ============================================ ASSESSMENT CONCLUSION

export const AssessmentConclusion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  padding: 0 10px 5px 0;

  svg {
    font-size: 50px;

    color: var(--green);
  }
`

export const AssessmentConclusionLabel = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  text-align: center;

  color: var(--green);

  b {
    font-weight: 800;
  }
`

export const AssessmentConclusionResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  row-gap: 30px;
`

export const PercentageBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`

export const PercentageBlockItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`

export const PercentageBlockItemLabel = styled.div`
  display: flex;

  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`

export const PercentageBlockItemBar = styled.div`
  display: flex;
  width: 100%;
  height: 12px;

  background-color: rgba(0, 0, 0, 0.08);
`

export const PercentageBlockItemFill = styled.div`
  display: flex;
  width: ${(props) => props.fill}%;
  height: 100%;

  background-color: ${(props) => props.fillColor};
`

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
`

export const LabelBlockItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  font-size: 15px;
  line-height: 15px;
  font-weight: 300;

  b {
    font-weight: 500;
  }

  p {
    margin-bottom: 0;
  }
`

// export const AssessmentConclusionResults = styled.div`
//   display: flex;
// `

// export const AssessmentConclusionResults = styled.div`
//   display: flex;
// `

export const AssessmentConclusionCta = styled.button`
  font-size: var(--text-paragraph);
  font-weight: 400;
  padding: 8px 14px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: 0.2s;

  color: var(--white);
  background: ${(props) =>
    props.disabled ? 'var(--orange-disabled)' : 'var(--light-orange)'};

  &:hover {
    background: ${(props) =>
      props.disabled ? 'var(--orange-disabled)' : 'var(--orange)'};
  }
`
