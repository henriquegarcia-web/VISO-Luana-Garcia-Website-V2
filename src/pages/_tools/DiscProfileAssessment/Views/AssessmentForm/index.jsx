import React, { useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Modal, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const AssessmentForm = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Análise de perfil DISC
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <S.AssessmentForm></S.AssessmentForm>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AssessmentForm
