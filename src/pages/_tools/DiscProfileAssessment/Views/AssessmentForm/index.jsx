import React, { useState, useEffect } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Modal, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import discQuestions from '../../../../../data/discQuestions'

import { handleRegisterAssessment } from '../../../../../firebase/contact'
import { useMemo } from 'react'

const AssessmentFormModal = (props) => {
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
        <Assessment onHide={props.onHide} userId={props.userId} />
      </Modal.Body>
    </Modal>
  )
}

const AssessmentViewModal = (props) => {
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
        <AssessmentConclusion
          savedResults={props.resultToView}
          onHide={props.onHide}
        />
        {/* <Assessment onHide={props.onHide} userId={props.userId} /> */}
      </Modal.Body>
    </Modal>
  )
}

export { AssessmentFormModal, AssessmentViewModal }

// ============================================ ASSESSMENT CONCLUSION

const calculatePercentage = (value) => {
  const percentage = (value / 50) * 100
  return percentage
}

const classificate = (value) => {
  if (value >= 41 && value <= 50) {
    return 'Altíssima intensidade'
  } else if (value >= 30 && value <= 40) {
    return 'Alta intensidade'
  } else if (value >= 20 && value <= 29) {
    return 'Média intensidade'
  } else if (value >= 11 && value <= 19) {
    return 'Baixa intensidade'
  } else if (value >= 0 && value <= 10) {
    return 'Baixíssima intensidade'
  }
}

export const AssessmentConclusion = ({ savedResults, onHide, isFirstTime }) => {
  const percentageResult = useMemo(() => {
    return {
      dominanceResult: calculatePercentage(savedResults.dominanceResult),
      influenceResult: calculatePercentage(savedResults.influenceResult),
      stabilityResult: calculatePercentage(savedResults.stabilityResult),
      conformityResult: calculatePercentage(savedResults.conformityResult)
    }
  }, [savedResults])

  const labelResult = useMemo(() => {
    return {
      dominanceResult: classificate(savedResults.dominanceResult),
      influenceResult: classificate(savedResults.influenceResult),
      stabilityResult: classificate(savedResults.stabilityResult),
      conformityResult: classificate(savedResults.conformityResult)
    }
  }, [savedResults])

  return (
    <S.AssessmentConclusion>
      {isFirstTime && (
        <S.AssessmentConclusionLabel>
          <b>Parabéns!</b> Análise concluída com sucesso.
        </S.AssessmentConclusionLabel>
      )}
      <S.AssessmentConclusionResults>
        <S.PercentageBlock>
          <S.PercentageBlockItem>
            <S.PercentageBlockItemLabel>Dominância</S.PercentageBlockItemLabel>
            <S.PercentageBlockItemBar>
              <S.PercentageBlockItemFill
                fillColor="#d9534f"
                fill={percentageResult.dominanceResult}
              />
            </S.PercentageBlockItemBar>
          </S.PercentageBlockItem>
          <S.PercentageBlockItem>
            <S.PercentageBlockItemLabel>Influência</S.PercentageBlockItemLabel>
            <S.PercentageBlockItemBar>
              <S.PercentageBlockItemFill
                fillColor="#f0ad4e"
                fill={percentageResult.influenceResult}
              />
            </S.PercentageBlockItemBar>
          </S.PercentageBlockItem>
          <S.PercentageBlockItem>
            <S.PercentageBlockItemLabel>
              Estabilidade
            </S.PercentageBlockItemLabel>
            <S.PercentageBlockItemBar>
              <S.PercentageBlockItemFill
                fillColor="#5cb85c"
                fill={percentageResult.stabilityResult}
              />
            </S.PercentageBlockItemBar>
          </S.PercentageBlockItem>
          <S.PercentageBlockItem>
            <S.PercentageBlockItemLabel>
              Conformidade
            </S.PercentageBlockItemLabel>
            <S.PercentageBlockItemBar>
              <S.PercentageBlockItemFill
                fillColor="#337ab7"
                fill={percentageResult.conformityResult}
              />
            </S.PercentageBlockItemBar>
          </S.PercentageBlockItem>
        </S.PercentageBlock>
        <S.LabelBlock>
          <S.LabelBlockItem>
            <b>Dominância: </b>
            <p>{labelResult.dominanceResult}</p>
          </S.LabelBlockItem>
          <S.LabelBlockItem>
            <b>Influência: </b>
            <p>{labelResult.influenceResult}</p>
          </S.LabelBlockItem>
          <S.LabelBlockItem>
            <b>Estabilidade: </b>
            <p>{labelResult.stabilityResult}</p>
          </S.LabelBlockItem>
          <S.LabelBlockItem>
            <b>Conformidade: </b>
            <p>{labelResult.conformityResult}</p>
          </S.LabelBlockItem>
        </S.LabelBlock>
      </S.AssessmentConclusionResults>
      <S.AssessmentConclusionCta onClick={onHide}>
        Fechar
      </S.AssessmentConclusionCta>
    </S.AssessmentConclusion>
  )
}

// ============================================ ASSESSMENT FORM

export const Assessment = ({ onHide, userId }) => {
  const [concluded, setConcluded] = useState(false)
  const [savedResults, setSavedResults] = useState({})

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

  const handleSubmitData = async (data) => {
    const sumByGroup = calculateSumByQuestionGroup(data)

    const assessmentData = {
      assessmentRealizedAt: Date.now(),
      dominanceResult: sumByGroup.question_group_d,
      influenceResult: sumByGroup.question_group_i,
      stabilityResult: sumByGroup.question_group_s,
      conformityResult: sumByGroup.question_group_c
    }

    const registerAssessmentRespose = await handleRegisterAssessment({
      userId: userId,
      assessmentData: assessmentData
    })

    if (!!registerAssessmentRespose) {
      setConcluded(true)
      setSavedResults(registerAssessmentRespose)
      reset()
      return
    }

    setConcluded(false)
    setSavedResults({})
  }

  if (concluded)
    return (
      <AssessmentConclusion
        savedResults={savedResults}
        onHide={onHide}
        isFirstTime
      />
    )

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
