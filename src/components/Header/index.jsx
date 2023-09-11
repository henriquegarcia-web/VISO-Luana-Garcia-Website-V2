import React, { useState } from "react";
import * as S from "./style";

import { FiUser, FiMenu, FiX } from "react-icons/fi";

import ChangeLanguage from "../ChangeLanguage";
import { Link } from "react-router-dom";

const Header = ({ isBlog }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LogoContainer>
          <a href="/#home">
            {isBlog ? (
              <img src="/favicon_luana_garcia.png" alt="Luana Garcia Logo" />
            ) : (
              <img src="/logo.png" alt="Luana Garcia Logo" />
            )}
          </a>

          {isBlog && <div className="blog__indicator">Conteúdos</div>}
        </S.LogoContainer>
        {!isBlog && (
          <>
            <S.MenuContainer>
              <ul>
                <li>
                  <a href="#home">Início</a>
                </li>
                <li>
                  <a href="#sobre-mim">Quem sou eu</a>
                </li>
                <li>
                  <a href="#meus-serviços">Serviços</a>
                </li>
                <li>
                  <a href="#formas-de-atendimento">Atendimento</a>
                </li>
                <li>
                  <Link to="/blog">Conteúdos</Link>
                </li>
              </ul>
            </S.MenuContainer>
            <S.CtaContainer href="#contato">
              <button>Entrar em Contato</button>
            </S.CtaContainer>
          </>
        )}
        {/* <S.UserContainer1>
          <button>Relatórios</button>
        </S.UserContainer1> */}

        <S.UserContainer2>
          <Link to="/login">
            {/* <FiUser />
            Bem-vinda, <b>Entre</b> */}
            RELATÓRIO
          </Link>
        </S.UserContainer2>

        <ChangeLanguage />

        <S.MenuMobile>
          <S.MenuInput
            isCloseIcon={mobileMenuIsOpen}
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? <FiX /> : <FiMenu />}
          </S.MenuInput>
          {mobileMenuIsOpen && (
            <S.MenuWrapper>
              {!isBlog && (
                <ul>
                  <li onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                    <a href="#home">Início</a>
                  </li>
                  <li onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                    <a href="#sobre-mim">Quem sou eu</a>
                  </li>
                  <li onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                    <a href="#meus-serviços">Serviços</a>
                  </li>
                  <li onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                    <a href="#contato">Conteúdos</a>
                  </li>
                </ul>
              )}

              <div className="ctas">
                {!isBlog && (
                  <a
                    href="#formas-de-atendimento"
                    onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                  >
                    <button>Entrar em Contato</button>
                  </a>
                )}

                <div className="cta">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                  >
                    {/* <FiUser />
                    Bem-vinda, <b>Entre</b> */}
                    RELATÓRIO
                  </Link>
                </div>
              </div>
            </S.MenuWrapper>
          )}
        </S.MenuMobile>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
