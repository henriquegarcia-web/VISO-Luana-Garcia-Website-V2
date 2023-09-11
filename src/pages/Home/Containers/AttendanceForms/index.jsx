import React from "react";
import * as S from "./style";
import * as G from "../../../../globalStyles";
import * as I from "react-icons/fi";

const AttendanceForms = () => {
  return (
    <S.AttendanceFormsContainer>
      <G.SectionHeader>
        <div>
          <I.FiCopy />
        </div>
        Atendimento
      </G.SectionHeader>
      <G.SectionContent className="attendance_form">
        <S.AttendanceFormWrapper>
          <S.AttendanceForm>
            <h3>Online</h3>
            <p>
              O atendimento online é ideal para quem deseja ser atendida no
              conforto do lar ou onde se sentir mais tranquila.
            </p>
            <p>
              Quer saber mais? Agende sua consulta ou entre em contato pelos
              nossos canais de atendimento.
            </p>

            {/* <G.MainButton>
              <a href="/">Agendar Consulta</a>
            </G.MainButton> */}
          </S.AttendanceForm>
          <S.AttendanceForm>
            <h3>Presencial</h3>
            <p>
              O atendimento presencial pode ser realizado na Clínica Alinhar
              Estética ({" "}
              <a
                href="https://www.instagram.com/accounts/login/?next=%2Fandreiaoliveira_estetica%2F&source=omni_redirect"
                target="_blank"
                rel="noopener noreferrer"
              >
                @alinharestetica
              </a>{" "}
              ), um local especialmente preparado pra te receber!
            </p>
            <p>Também atendo em escolas, empresas e faço workshops.</p>
            <p>
              Quer saber mais? Agende sua consulta ou entre em contato pelos
              nossos canais de atendimento.
            </p>
            {/* <G.MainButton>
              <a href="/">Agendar Consulta</a>
            </G.MainButton> */}
          </S.AttendanceForm>
        </S.AttendanceFormWrapper>
      </G.SectionContent>
    </S.AttendanceFormsContainer>
  );
};

export default AttendanceForms;
