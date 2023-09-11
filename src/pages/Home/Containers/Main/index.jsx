import React from "react";
import * as S from "./style";
import * as G from "../../../../globalStyles";

const index = () => {
  return (
    <S.MainContainer>
      <S.InfosContainer>
        <p>Sucesso é Sentir-se Bem Sendo Você Mesma!</p>
        <h2>
          Olá, eu sou a <b>Luana Garcia</b>
        </h2>
        <h1>
          <span>Coach Family</span>
          <span>Analista Corporal & Comportamental</span>
          <span>Terapeuta</span>
        </h1>
        <S.CtasContainer>
          <G.MainButton>
            <a href="#sobre-mim">+ Sobre mim</a>
          </G.MainButton>

          <G.MainButton>
            <a href="#meus-serviços">Serviços</a>
          </G.MainButton>

          <G.MainButton>
            <a href="#contato">Contato</a>
          </G.MainButton>
        </S.CtasContainer>
      </S.InfosContainer>

      <S.ImageContainer>
        <img src="/perfil.png" alt="Luana Garcia Foto de Perfil" />
      </S.ImageContainer>
    </S.MainContainer>
  );
};

export default index;
