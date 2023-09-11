import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../globalStyles";
import * as I from "react-icons/fi";

import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setErrorMessage(
      "Olá amorosa! Em breve um espaço só para você. Aguarde que estamos preperando tudo ..."
    );
    return;

    if (user === "" && password === "") {
      setErrorMessage("Preencha o campo de usuário e senha");
      return;
    }
    if (user === "") {
      setErrorMessage("Preencha o campo de usuário");
      return;
    }
    if (password === "") {
      setErrorMessage("Preencha o campo de senha");
      return;
    }
  };

  return (
    <S.AdminLogin>
      <S.LoginBackground></S.LoginBackground>
      <S.LoginContainer>
        <S.LogoContainer>
          <Link to="/">
            <img src="/logo.png" alt="Luana Garcia Logo" />
          </Link>
        </S.LogoContainer>

        <span>
          <h3>Olá, seja bem-vinda!</h3>
          <p>
            Digite seu <b>usuário</b> e <b>senha</b> para continuar
          </p>
        </span>

        <S.LoginInputsContainer>
          <G.InputText
            type="text"
            placeholder="Usuário"
            onChange={(e) => setUser(e.target.value)}
            onClick={() => setErrorMessage("")}
          />
          <G.InputText
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            onClick={() => setErrorMessage("")}
          />

          <button onClick={handleSubmit}>Entrar</button>

          {errorMessage && (
            <S.MessageContainer>{errorMessage}</S.MessageContainer>
          )}
        </S.LoginInputsContainer>

        <Link to="/" className="backToMenu">
          <I.FiChevronLeft /> Voltar
        </Link>
      </S.LoginContainer>
    </S.AdminLogin>
  );
};

export default AdminLogin;
