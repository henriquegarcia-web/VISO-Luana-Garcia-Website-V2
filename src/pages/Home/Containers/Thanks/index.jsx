import React from "react";
import * as S from "./style";
import * as I from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const index = () => {
  return (
    <S.ThanksContainer>
      <div className="thanks_text">
        <b>Obrigado</b>
        <p>pela visita!</p>

        <div className="thanks_links">
          <a
            href="https://www.instagram.com/luanagarcia.coach/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <I.FiInstagram />
          </a>
          <a
            // href="https://www.facebook.com/profile.php?id=100022473967897"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <I.FiFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5584998010033&text=Ol%C3%A1%20Luana!%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <img src="/thanks.png" alt="" />
    </S.ThanksContainer>
  );
};

export default index;
