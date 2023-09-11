import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";

import BrasilFlag from "/flag_brasil.png";
import PortugalFlag from "/flag_portugal.png";
import UsaFlag from "/flag_usa.png";

const ChangeLanguage = () => {
  const [active, setActive] = useState(false);

  const [language, setLanguage] = useState("pt-br");
  const [actualFlag, setActualFlag] = useState();

  const ref = useRef(null);

  useEffect(() => {
    switch (language) {
      case "pt-br":
        setActualFlag(BrasilFlag);
        break;
      case "pt":
        setActualFlag(PortugalFlag);
        break;
      case "usa":
        setActualFlag(UsaFlag);
        break;
      default:
        setActualFlag(BrasilFlag);
        break;
    }
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <S.LanguageContainer ref={ref}>
      <S.LanguageActive onClick={() => setActive(!active)}>
        <img src={actualFlag} alt="" />
      </S.LanguageActive>

      {active && (
        <S.LanguagesWrapper>
          <S.LanguageItem
            onClick={() => setLanguage("pt-br")}
            isSelected={language === "pt-br"}
          >
            <img src="/flag_brasil.png" alt="" />
          </S.LanguageItem>

          <S.LanguageItem
            // onClick={() => setLanguage("pt")}
            isSelected={language === "pt"}
            isInactive={true}
          >
            <img src="/flag_portugal.png" alt="" />
          </S.LanguageItem>

          <S.LanguageItem
            // onClick={() => setLanguage("usa")}
            isSelected={language === "usa"}
            isInactive={true}
          >
            <img src="/flag_usa.png" alt="" />
          </S.LanguageItem>
        </S.LanguagesWrapper>
      )}
    </S.LanguageContainer>
  );
};

export default ChangeLanguage;
