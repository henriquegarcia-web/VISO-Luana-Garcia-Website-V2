import React from "react";
import * as S from "./style";
import * as G from "../../../../globalStyles";

import { FiUser } from "react-icons/fi";

const index = () => {
  const mySkills = ["Comunicável", "Amigável", "Consistente"];

  return (
    <S.MissionContainer>
      <G.SectionHeader>
        <div>
          <FiUser />
        </div>
        Missão | Visão | Princípios
      </G.SectionHeader>
      <G.SectionContent className="section">
        <S.MissionTextContainer>
          <p>
            É conectar as pessoas à própria essência, proporcionando a cada uma
            delas o autoconhecimento necessário para que vivam cada etapa de
            suas vidas da melhor maneira possível.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            maxime cupiditate magnam, ipsam repellendus exercitationem quam.
            Eos, rerum exercitationem officiis repellat odit ex. Accusantium
            repellat atque aperiam dolor cumque quod.
          </p>

          <div className="skills">
            <div className="skills__container">
              {mySkills.map((skill) => (
                <S.Skills key={skill}>{skill}</S.Skills>
              ))}
            </div>
          </div>
        </S.MissionTextContainer>
        {/* 
        <S.MissionImageContainer>
          <img src="/aboutme.jpeg" alt="Luana Garcia Imagem de Perfil" />
        </S.MissionImageContainer> */}
      </G.SectionContent>
    </S.MissionContainer>
  );
};

export default index;
