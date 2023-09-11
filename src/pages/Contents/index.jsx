import React from "react";
import * as S from "./style";
import * as I from "react-icons/fi";

import Header from "../../components/Header";
import { Link } from "react-router-dom";

const ContentsPage = () => {
  return (
    <S.ContentsPage>
      <Header isBlog />

      <S.PageWrapper>
        <S.PageHeader>
          <Link to="/">
            <I.FiChevronLeft /> Voltar para o site
          </Link>
        </S.PageHeader>
        <S.PageContent>
          <S.ContentsAdvice>
            Em breve <b>muitos</b> conteúdos para você
          </S.ContentsAdvice>
        </S.PageContent>
      </S.PageWrapper>
    </S.ContentsPage>
  );
};

export default ContentsPage;
