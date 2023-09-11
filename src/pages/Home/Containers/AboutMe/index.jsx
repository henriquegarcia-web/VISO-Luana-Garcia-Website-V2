import React from "react";
import * as S from "./style";
import * as G from "../../../../globalStyles";

import { FiUser } from "react-icons/fi";

const index = () => {
  const mySkills = ["Profissional", "Atenciosa", "Feliz", "Comunicativa"];

  return (
    <S.AboutMeContainer>
      <G.SectionHeader>
        <div>
          <FiUser />
        </div>
        Quem sou eu
      </G.SectionHeader>
      <G.SectionContent className="section">
        <S.AboutMeWrapper>
          <S.AboutMeTextContainer>
            <p>
              Eu sou Luana Garcia, filha amada de Deus, esposa fiel e
              apaixonada, mãe firme e amorosa, amiga parceira e disposta,
              profissional dedicada e atenciosa. Sou feliz e amo estar conectada
              às pessoas e perceber como elas se sentem. Meu mundo gira em torno
              de amar as pessoas, compreendê-las e auxiliá-las para viver sua
              própria jornada, da melhor maneira que puderem!<br></br>Sim, você
              pode me chamar de sua Coach das Emoções!
              <h3>Missão</h3>
              Conectar as pessoas à própria essência, proporcionando a cada uma
              delas o autoconhecimento necessário para que vivam cada etapa de
              suas vidas da melhor maneira possível.
            </p>

            <div className="skills">
              <h3>Adjetivos que me descrevem</h3>

              <div className="skills__container">
                {mySkills.map((skill) => (
                  <S.Skills key={skill}>{skill}</S.Skills>
                ))}
              </div>
            </div>
          </S.AboutMeTextContainer>

          <S.AboutMeImageContainer>
            <img src="/aboutme.png" alt="Luana Garcia Imagem de Perfil" />
          </S.AboutMeImageContainer>
        </S.AboutMeWrapper>
      </G.SectionContent>
    </S.AboutMeContainer>
  );
};

export default index;
