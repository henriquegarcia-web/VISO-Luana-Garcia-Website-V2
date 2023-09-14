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

const AssessmentForm = (props) => {
  const { handleSubmit, register, formState, reset, control } = useForm({
    // mode: 'onBlur',
    // // resolver: yupResolver(assessmentSchema),
    // // defaultValues: {
    // //   userName: '',
    // //   userPhone: ''
    // // }
  })

  const handleSubmitData = (data) => {
    console.log(data)
  }

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
        <S.AssessmentForm onSubmit={handleSubmit(handleSubmitData)}>
          <S.AssessmentFormStages></S.AssessmentFormStages>
          <S.AssessmentFormContainer>
            <S.AssessmentFormWrapper>
              {discQuestions.map((pergunta, index) => (
                <S.AssessmentFormTable key={index}>
                  <h4>{pergunta.pergunta}</h4>
                  <table>
                    <tbody>
                      {pergunta.opcoes.map((opcao, opcaoIndex) => (
                        <tr key={opcaoIndex}>
                          <td>{opcao.label}</td>
                          <td>
                            <Controller
                              name={`respostas[${index}]`}
                              control={control}
                              render={({ field }) => (
                                <S.AssessmentInputContainer>
                                  <S.AssessmentInput
                                    type="radio"
                                    name={`pergunta_${index}`}
                                    value={opcao.value}
                                    {...field}
                                    onChange={() => {
                                      field.onChange(opcao.value)
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
          </S.AssessmentFormContainer>
          <S.AssessmentFormFooter>
            <Button onClick={props.onHide}>Cancelar</Button>
            <Button type="submit">Próximo</Button>
          </S.AssessmentFormFooter>
        </S.AssessmentForm>
      </Modal.Body>
    </Modal>
  )
}

export default AssessmentForm
