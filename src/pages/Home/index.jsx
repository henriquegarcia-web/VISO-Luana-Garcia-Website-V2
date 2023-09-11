import React from "react";
import * as S from "./style";

import createScrollSnap from "scroll-snap";
import MainContainer from "./Containers/Main";
import AboutMeContainer from "./Containers/AboutMe";
import MissionContainer from "./Containers/Mission";
import ServicesContainer from "./Containers/Services";
import Attendance from "./Containers/Attendance";
import AttendanceForms from "./Containers/AttendanceForms";
import SchedulingContainer from "./Containers/Scheduling";
import ThanksContainer from "./Containers/Thanks";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import WhatsAppCta from "../../components/WhatsAppCta";

const index = () => {
  return (
    <S.HomePage>
      <Header />

      <WhatsAppCta />

      <S.Page id="home">
        <MainContainer />
      </S.Page>

      {/* <S.Page id="mission_page">
        <MissionContainer />
      </S.Page> */}

      <S.Page id="sobre-mim">
        <AboutMeContainer />
      </S.Page>

      <S.Page id="meus-serviços">
        <ServicesContainer />
      </S.Page>

      {/* <S.Page>
        <Attendance />
      </S.Page> */}

      <S.Page id="formas-de-atendimento">
        <AttendanceForms />
      </S.Page>

      <S.Page id="contato">
        <SchedulingContainer />
      </S.Page>

      <S.Page id="obrigado">
        <ThanksContainer />
      </S.Page>

      <Footer />
    </S.HomePage>
  );
};

export default index;
