import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Footer>
      <div className="desktop__footer">
        <b>© Luana Garcia 2022</b> - Todos os direitos reservados | Website
        desenvolvido pela <b>VISO Marketing</b>
      </div>

      <div className="mobile__footer">
        <div>
          <b>© Luana Garcia 2022</b> - Todos os direitos reservados
        </div>
        <div>
          Website desenvolvido pela <b>VISO Marketing</b>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
