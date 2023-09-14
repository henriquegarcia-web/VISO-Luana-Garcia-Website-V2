import React, { useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Modal, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import discQuestions from '../../../../../data/discQuestions'
import { useEffect } from 'react'

const AssessmentForm = (props) => {
  const [concluded, setConcluded] = useState(false)

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <S.AssessmentFormHeader>
            Análise de perfil <b>DISC</b>
          </S.AssessmentFormHeader>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal_content">
        {!concluded ? (
          <AssessmentConclusion />
        ) : (
          <Assessment setConcluded={setConcluded} onHide={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  )
}

export default AssessmentForm

// ============================================ ASSESSMENT CONCLUSION

export const Assessment = ({ setConcluded, onHide }) => {
  const { handleSubmit, register, formState, reset, control, watch } = useForm()
  const { errors, isSubmitting, isValid } = formState

  const selectedAnswers = watch()

  const [progress, setProgress] = useState(0)

  const calculateProgress = () => {
    const totalQuestions = discQuestions.reduce(
      (acc, questionGroup) => acc + questionGroup.questionGroupData.length,
      0
    )

    const answeredQuestions = Object.values(selectedAnswers).filter(
      (value) => typeof value !== 'undefined'
    ).length

    const currentProgress = (answeredQuestions / totalQuestions) * 100

    setProgress(currentProgress)
  }

  useEffect(() => {
    calculateProgress()
  }, [selectedAnswers])

  const calculateSumByQuestionGroup = (answers) => {
    const sumByGroup = {}

    discQuestions.forEach((questionGroup) => {
      sumByGroup[questionGroup.questionGroupId] = 0
    })

    Object.keys(answers).forEach((questionId) => {
      const question = discQuestions.find((group) =>
        group.questionGroupData.find((q) => q.questionId === questionId)
      )
      if (question) {
        const groupSum = sumByGroup[question.questionGroupId]
        const answerValue = answers[questionId]
        if (typeof answerValue === 'number') {
          sumByGroup[question.questionGroupId] = groupSum + answerValue
        }
      }
    })

    return sumByGroup
  }

  const handleSubmitData = (data) => {
    const sumByGroup = calculateSumByQuestionGroup(data)

    console.log(sumByGroup)
    setConcluded(true)
  }
  return (
    <S.AssessmentForm onSubmit={handleSubmit(handleSubmitData)}>
      <S.AssessmentFormStages>
        <S.FormStageBar>
          <S.FormStageBarFill fill={progress} />
        </S.FormStageBar>
      </S.AssessmentFormStages>
      <S.AssessmentFormContainer>
        {discQuestions.map((questionGroup) => (
          <S.AssessmentFormGroup key={questionGroup.questionGroupId}>
            <S.AssessmentFormWrapperTitle>
              {questionGroup.questionGroupLabel}
            </S.AssessmentFormWrapperTitle>
            <S.AssessmentFormWrapper>
              {questionGroup.questionGroupData.map((question) => (
                <S.AssessmentFormTable key={question.questionId}>
                  <table>
                    <tbody>
                      {question.questionOptions.map((option) => (
                        <tr key={option.answerId}>
                          <td>{option.answerLabel}</td>
                          <td>
                            <Controller
                              name={question.questionId}
                              rules={{ required: true }}
                              control={control}
                              render={({ field }) => (
                                <S.AssessmentInputContainer>
                                  <S.AssessmentInput
                                    type="radio"
                                    value={option.answerValue}
                                    {...field}
                                    onChange={() => {
                                      field.onChange(option.answerValue)
                                    }}
                                  />
                                </S.AssessmentInputContainer>
                              )}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </S.AssessmentFormTable>
              ))}
            </S.AssessmentFormWrapper>
          </S.AssessmentFormGroup>
        ))}
      </S.AssessmentFormContainer>
      <S.AssessmentFormFooter>
        <Button onClick={onHide}>Cancelar</Button>
        <Button type="submit" disabled={!isValid}>
          Concluir
        </Button>
      </S.AssessmentFormFooter>
    </S.AssessmentForm>
  )
}

// ============================================ ASSESSMENT CONCLUSION

export const AssessmentConclusion = () => {
  return (
    <S.AssessmentConclusion>
      <S.AssessmentConclusionLabel>
        <b>Parabéns!</b> Análise concluída com sucesso.
      </S.AssessmentConclusionLabel>
      <S.AssessmentConclusionCta onClick={() => {}}>
        Ver resultado
      </S.AssessmentConclusionCta>
    </S.AssessmentConclusion>
  )
}
