import React from "react";
import * as S from "./style";

const AdminPanel = () => {
  return (
    <S.AdminPanel>
      <S.AdminPanelHeader>
        <div className="logo__container">
          <img src="/logo.png" alt="Luana Garcia Logo" />
        </div>
        <p>Admin Painel</p>
        <button>Sair</button>
      </S.AdminPanelHeader>

      <S.AdminPanelContainer>
        <S.AdminPanelMenu>
          <Menu />
        </S.AdminPanelMenu>

        <S.AdminPanelViews></S.AdminPanelViews>
      </S.AdminPanelContainer>
    </S.AdminPanel>
  );
};

export default AdminPanel;

// ------------------------------------- COMPONENTE DO MENU

const Menu = () => {
  return (
    <S.Menu>
      <div>
        <p>Ferramentas</p>
        <button>Análise Corporal</button>
        <button>Uma ferramenta bem longa</button>
      </div>

      <div>
        <p>Clientes</p>
        <button>Análises</button>
        <button>Manuais</button>
        <button>Banco de Dados</button>
      </div>
    </S.Menu>
  );
};
