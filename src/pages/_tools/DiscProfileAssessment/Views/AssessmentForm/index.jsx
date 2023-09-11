import React, { useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Modal, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

const perguntas = [
  {
    pergunta: 'PERGUNTA 1',
    opcoes: [
      { label: 'Muito conciliador', value: 0 },
      { label: 'Conciliador', value: [1, 2] },
      { label: 'Meio-termo', value: 2.5 },
      { label: 'Conflitivo', value: [3, 4] },
      { label: 'Muito conflitivo', value: 5 }
    ]
  }
  // Adicione mais perguntas conforme necessário
]

const AssessmentForm = (props) => {
  const { handleSubmit, register, formState, reset, control } = useForm({
    // mode: 'onBlur',
    // // resolver: yupResolver(assessmentSchema),
    // // defaultValues: {
    // //   userName: '',
    // //   userPhone: ''
    // // }
  })

  return (
    <Modal
      {...props}
      size="lg"
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
      <Modal.Body>
        <S.AssessmentForm>
          {perguntas.map((pergunta, index) => (
            <div key={index}>
              <h4>{pergunta.pergunta}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Resposta</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {pergunta.opcoes.map((opcao, opcaoIndex) => (
                    <tr key={opcaoIndex}>
                      <td>{opcao.label}</td>
                      <td>
                        {Array.isArray(opcao.value) ? (
                          <Controller
                            name={`respostas[${index}]`}
                            control={control}
                            render={({ field }) => (
                              <div>
                                {opcao.value.map((val, valIndex) => (
                                  <div key={valIndex}>
                                    <input
                                      type="radio"
                                      name={`pergunta_${index}`} // Grupo pelo nome da pergunta
                                      value={val}
                                      {...field}
                                    />
                                    <label>{val}</label>
                                  </div>
                                ))}
                              </div>
                            )}
                          />
                        ) : (
                          <Controller
                            name={`respostas[${index}]`}
                            control={control}
                            render={({ field }) => (
                              <div>
                                <input
                                  type="radio"
                                  name={`pergunta_${index}`} // Grupo pelo nome da pergunta
                                  value={opcao.value}
                                  {...field}
                                />
                                <label>{opcao.value}</label>
                              </div>
                            )}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </S.AssessmentForm>
      </Modal.Body>
      <Modal.Footer>
        <S.AssessmentFormFooter>
          <Button onClick={props.onHide}>Cancelar</Button>
          <Button onClick={props.onHide}>Próximo</Button>
        </S.AssessmentFormFooter>
      </Modal.Footer>
    </Modal>
  )
}

export default AssessmentForm
