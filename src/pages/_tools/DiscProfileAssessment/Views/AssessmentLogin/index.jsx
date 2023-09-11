import React, { useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import {
  createUserProfile,
  checkIfUserExists
} from '../../../../../firebase/contact'

const assessmentSchema = Yup.object().shape({
  userName: Yup.string().required(),
  userPhone: Yup.string().required()
})

const AssessmentLogin = () => {
  const navigate = useNavigate()

  const { handleSubmit, register, formState, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(assessmentSchema),
    defaultValues: {
      userName: '',
      userPhone: ''
    }
  })

  const { errors, isSubmitting, isValid } = formState

  const handleAssessmentLogin = async (data) => {
    if (!isValid) return

    // VALIDAR ANTES SE O USUÁRIO JÁ EXISTE

    const checkIfUserExistsResponse = await checkIfUserExists({
      userPhone: data.userPhone
    })

    if (!!checkIfUserExistsResponse) {
      reset()
      navigate(`/analise-disc/${createUserResponseId}`)
      return
    }

    const createUserResponseId = await createUserProfile({
      userName: data.userName,
      userPhone: data.userPhone
    })

    if (createUserResponseId) {
      reset()
      navigate(`/analise-disc/${createUserResponseId}`)
    }
  }

  const submitIsDisable = !isValid

  return (
    <S.AssessmentLogin>
      <S.AssessmentLoginHeader>
        <h3>Olá, seja bem-vinda!</h3>
        <p>
          Vamos iniciar a sua <b>análise de perfil disc</b>
          {/* Digite seu <b>usuário</b> e <b>senha</b> para continuar */}
        </p>
      </S.AssessmentLoginHeader>

      <S.AssessmentLoginContainer
        onSubmit={handleSubmit(handleAssessmentLogin)}
      >
        <G.InputText {...register('userName')} type="text" placeholder="Nome" />
        <G.InputText
          {...register('userPhone')}
          type="text"
          placeholder="Telefone"
        />

        <S.AssessmentLoginButton type="submit" disabled={submitIsDisable}>
          Iniciar
        </S.AssessmentLoginButton>

        {/* {errorMessage && <S.MessageContainer>{errorMessage}</S.MessageContainer>} */}
      </S.AssessmentLoginContainer>
    </S.AssessmentLogin>
  )
}

export default AssessmentLogin
