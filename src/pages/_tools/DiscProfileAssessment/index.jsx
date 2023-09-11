import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './style'
import * as G from '../../../globalStyles'
import * as I from 'react-icons/fi'

import { Link } from 'react-router-dom'

import AssessmentLogin from './Views/AssessmentLogin'

const DiscProfileAssessment = () => {
  const params = useParams()

  const { userId } = params

  return (
    <S.AssessmentLogin>
      <S.AssessmentBackground></S.AssessmentBackground>
      <S.AssessmentContainer>
        <S.LogoContainer>
          <Link to="/">
            <img src="/logo.png" alt="Luana Garcia Logo" />
          </Link>
        </S.LogoContainer>

        <span>
          <h3>Olá, seja bem-vinda!</h3>
          <p>
            Vamos iniciar a sua <b>análise de perfil disc</b>
            {/* Digite seu <b>usuário</b> e <b>senha</b> para continuar */}
          </p>
        </span>

        <AssessmentLogin />

        <Link to="/" className="backToMenu">
          <I.FiChevronLeft /> Voltar
        </Link>
      </S.AssessmentContainer>
    </S.AssessmentLogin>
  )
}

export default DiscProfileAssessment
