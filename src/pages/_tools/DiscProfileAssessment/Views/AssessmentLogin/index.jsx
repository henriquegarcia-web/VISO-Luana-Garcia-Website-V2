import React, { useState } from 'react'
import * as S from './style'
import * as G from '../../../../../globalStyles'
import * as I from 'react-icons/fi'

import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// import { handleSigninAdmin } from "@/firebase/auth";

const assessmentSchema = Yup.object().shape({
  userName: Yup.string().required(),
  userPhone: Yup.string().required()
})

const AssessmentLogin = () => {
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

    console.log(data)

    // const signupAdminResponse = await handleSigninAdmin({
    //   userName: data.userName,
    //   userPhone: data.userPhone
    // })

    // if (signupAdminResponse) {
    //   reset()
    //   navigate('/admin/companies')
    // }
  }

  const submitIsDisable = !isValid

  return (
    <S.AssessmentLogin onSubmit={handleSubmit(handleAssessmentLogin)}>
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
    </S.AssessmentLogin>
  )
}

export default AssessmentLogin
