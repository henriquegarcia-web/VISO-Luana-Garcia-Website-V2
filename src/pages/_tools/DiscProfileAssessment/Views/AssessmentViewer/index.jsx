import React, { useEffect, useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Link } from 'react-router-dom'

import AssessmentForm from '../AssessmentForm'

import { getUserDataById } from '../../../../../firebase/contact'

const AssessmentViewer = ({ userId }) => {
  const [modalShow, setModalShow] = useState(false)

  const [userData, setUserData] = useState({})
  const [userDataLoading, setUserDataLoading] = useState(true)

  const handleShowModal = () => setModalShow(true)
  const handleHideModal = () => setModalShow(false)

  useEffect(() => {
    const getUserData = async () => {
      setUserDataLoading(true)
      const userDataResponse = await getUserDataById(userId)
      setUserData(userDataResponse)
      setUserDataLoading(false)
    }

    getUserData()
  }, [])

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
                Teste realizado em: 22/10/2023
                {/* {assessmentResult} */}
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

      <AssessmentForm show={modalShow} onHide={handleHideModal} />
    </S.AssessmentViewer>
  )
}

export default AssessmentViewer
