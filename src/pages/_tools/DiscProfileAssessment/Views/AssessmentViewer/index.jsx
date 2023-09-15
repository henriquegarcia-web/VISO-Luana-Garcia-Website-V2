import React, { useEffect, useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { AssessmentFormModal, AssessmentViewModal } from '../AssessmentForm'

import {
  getUserDataById,
  handleGetUserData
} from '../../../../../firebase/contact'

import { timestampToDate } from '../../../../../utils/convertTimestamp'

const AssessmentViewer = ({ userId }) => {
  const [modalShow, setModalShow] = useState(false)
  const [modalViewShow, setModalViewShow] = useState(false)

  const [userData, setUserData] = useState({})
  const [resultToView, setResultToView] = useState({})

  const handleShowModal = () => setModalShow(true)
  const handleHideModal = () => setModalShow(false)

  const handleOpenViewModal = (resultToView) => {
    setResultToView(resultToView)
    setModalViewShow(true)
  }
  const handleCloseViewModal = () => {
    setResultToView({})
    setModalViewShow(false)
  }

  useEffect(() => {
    const unsubscribe = handleGetUserData(userId, (accountData) => {
      setUserData(accountData)
    })

    if (unsubscribe) {
      return () => {
        unsubscribe()
      }
    }
  }, [userId])

  return (
    <S.AssessmentViewer>
      <S.AssessmentHeader>
        <h4>
          Bem vindo, <b>{userData?.userName}</b>!
        </h4>
        <S.AssessmentCreateButton onClick={handleShowModal}>
          Nova análise
        </S.AssessmentCreateButton>
      </S.AssessmentHeader>
      <S.AssessmentListHeader>Suas análises:</S.AssessmentListHeader>
      <S.AssessmentList>
        {!!userData?.userAssessments ? (
          <S.AssessmentListWrapper>
            {userData?.userAssessments.map((assessmentResult) => (
              <S.AssessmentListItem>
                <S.AssessmentListItemLabel>
                  Teste realizado em:{' '}
                  {timestampToDate(assessmentResult.assessmentRealizedAt)}
                </S.AssessmentListItemLabel>
                <S.AssessmentListItemInput
                  onClick={() => handleOpenViewModal(assessmentResult)}
                >
                  Ver
                </S.AssessmentListItemInput>
              </S.AssessmentListItem>
            ))}
          </S.AssessmentListWrapper>
        ) : (
          <S.AssessmentListEmpty>
            <img src="/empty.svg" alt="Empty" />
            Você não pussuí nenhuma análise ainda
          </S.AssessmentListEmpty>
        )}
      </S.AssessmentList>

      <AssessmentFormModal
        show={modalShow}
        onHide={handleHideModal}
        userId={userId}
      />

      <AssessmentViewModal
        show={modalViewShow}
        onHide={handleCloseViewModal}
        resultToView={resultToView}
      />
    </S.AssessmentViewer>
  )
}

export default AssessmentViewer
