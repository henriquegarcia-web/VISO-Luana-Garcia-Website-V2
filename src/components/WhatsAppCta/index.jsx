import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as I from "react-icons/fa";

const WhatsAppCta = () => {
  // const [isShowingMessage, setIsShowingMessage] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShowingMessage(true);
  //   }, 10000);
  // }, []);

  return (
    <S.WhatsAppCta>
      <a
        href="https://api.whatsapp.com/send?phone=5584998010033&text=Ol%C3%A1%20Luana!%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <I.FaWhatsapp />

        {/* {isShowingMessage && (
          <S.NotificationIndicator>1</S.NotificationIndicator>
        )}
        {isShowingMessage && (
          <div className="notification">Olá, como eu posso ajudá-la?</div>
        )} */}

        <div className="notification">Olá, como eu posso ajudá-la?</div>
      </a>
    </S.WhatsAppCta>
  );
};

export default WhatsAppCta;
