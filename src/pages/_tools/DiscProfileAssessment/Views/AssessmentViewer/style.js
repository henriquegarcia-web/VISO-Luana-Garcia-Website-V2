import styled from 'styled-components'

export const AssessmentViewer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 80px);
`

export const AssessmentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;

  h4 {
    font-size: var(--assessment-title);
    line-height: var(--assessment-title);
    margin-bottom: 5px;

    color: var(--green);

    b {
      font-weight: 600;
    }
  }
`

export const AssessmentCreateButton = styled.button`
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

export const AssessmentList = styled.div`
  display: flex;
  flex: 1;
`

export const AssessmentListHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;

  font-size: var(--assessment-subtitle);
  font-weight: 500;

  color: var(--orange);
`

export const AssessmentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
`

export const AssessmentListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 4px 4px 4px 10px;

  border: 1px solid var(--light-orange);
`

export const AssessmentListItemLabel = styled.div`
  display: flex;
  flex: 1;

  font-size: 12px;
  font-weight: 500;

  color: var(--text);
`

export const AssessmentListItemInput = styled.button`
  display: flex;
  border-radius: 6px;
  padding: 4px 8px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: white;
  background-color: var(--light-orange);
`

export const AssessmentListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  row-gap: 20px;

  font-size: var(--assessment-subtitle);
  font-weight: 300;

  img {
    width: 80px;
    margin-right: 10px;
  }
`
