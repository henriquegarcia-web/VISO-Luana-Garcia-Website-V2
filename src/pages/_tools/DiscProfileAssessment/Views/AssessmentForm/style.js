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

export const AssessmentForm = styled.div`
  display: flex;
`

export const AssessmentFormFooter = styled.div`
  display: flex;
  column-gap: 10px;
`
