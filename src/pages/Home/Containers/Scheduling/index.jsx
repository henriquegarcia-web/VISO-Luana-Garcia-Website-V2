import React from "react";

import * as S from "./style";
import * as G from "../../../../globalStyles";

import * as I from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Scheduling = () => {
  return (
    <S.SchedulingContainer>
      <G.SectionHeader>
        <div>
          <I.FiMapPin />
        </div>
        Contato
      </G.SectionHeader>
      <G.SectionContent className="contact_content">
        {/* <S.SchedulingForm>
          <G.InputText type="text" placeholder="Nome e sobrenome" />
          <G.InputText type="text" placeholder="Número de telefone" />
          <G.InputText type="text" placeholder="Endereço de e-mail" />
          <G.InputText type="text" placeholder="Por onde você me encontrou?" />

          <div>
            <p>
              <input
                type="radio"
                id="contact_by_phone"
                name="contact-method"
                checked
              />
              <label htmlFor="contact_by_phone">
                Prefiro contato por telefone
              </label>
            </p>

            <p>
              <input type="radio" id="contact_by_wpp" name="contact-method" />
              <label htmlFor="contact_by_wpp">
                Prefiro contato pelo WhatsApp
              </label>
            </p>
          </div>

          <G.MainButton>
            <a>Agendar Consulta</a>
          </G.MainButton>
        </S.SchedulingForm> */}

        <S.SchedulingInfos>
          {/* <h3>Informações de contato</h3> */}

          <S.ContactMethod
            href="https://www.google.com/search?q=alinhar%20estetica%20natal&oq=alinhar+&aqs=chrome.1.69i57j69i59j35i39j0i131i433i512j0i512l3j69i60.2119j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsaDUxiEnX2fXl1xzCojMpKEzGk8rw:1665773801685&rflfq=1&num=10&rldimm=4487066955448821556&lqi=ChZhbGluaGFyIGVzdGV0aWNhIG5hdGFsWhgiFmFsaW5oYXIgZXN0ZXRpY2EgbmF0YWySARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU15TFRScWIxSjNFQUWqARgQASoUIhBhbGluaGFyIGVzdGV0aWNhKAw&ved=2ahUKEwjev-b9suD6AhW6qZUCHUtnCWQQvS56BAgREAE&sa=X&rlst=f#lpc=lpc&rlfi=hd:;si:4487066955448821556,l,ChZhbGluaGFyIGVzdGV0aWNhIG5hdGFsWhgiFmFsaW5oYXIgZXN0ZXRpY2EgbmF0YWySARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU15TFRScWIxSjNFQUWqARgQASoUIhBhbGluaGFyIGVzdGV0aWNhKAw;mv:[[-5.7663639,-35.170171599999996],[-5.8905359,-35.219927399999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
            target="_blank"
          >
            <I.FiMap />
            Alinhar Estética Clínica Avançada e Embelezamento
          </S.ContactMethod>

          <S.ContactMethod
            href="https://www.instagram.com/luanagarcia.coach/"
            target="_blank"
          >
            <I.FiInstagram />
            luanagarcia.coach
          </S.ContactMethod>

          {/* <S.ContactMethod
            href="https://www.facebook.com/profile.php?id=100022473967897"
            target="_blank"
          >
            <I.FiFacebook />
            luanagarcia.coach
          </S.ContactMethod> */}

          <S.ContactMethod className="notLink">
            <I.FiMail />
            {/* contato@luanagarciacoach.com.br */}
            luanagarcia.coach@gmail.com
          </S.ContactMethod>

          <S.ContactMethod className="notLink">
            <I.FiPhone />
            (84) 9 9801-0033
          </S.ContactMethod>

          <S.CtasContainer>
            <G.MainButton>
              <a
                href="https://api.whatsapp.com/send?phone=5584998010033&text=Ol%C3%A1%20Luana!%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em contato pelo <FaWhatsapp />
              </a>
            </G.MainButton>

            <G.MainButton>
              <a
                href="https://form.jotform.com/luanasgarcia/agendamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </G.MainButton>
          </S.CtasContainer>
        </S.SchedulingInfos>

        <S.SchedulingMapContainer>
          <img src="/map.png" alt="" />
          <a
            href="https://www.google.com/search?q=alinhar%20estetica%20natal&oq=alinhar+&aqs=chrome.1.69i57j69i59j35i39j0i131i433i512j0i512l3j69i60.2119j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsaDUxiEnX2fXl1xzCojMpKEzGk8rw:1665773801685&rflfq=1&num=10&rldimm=4487066955448821556&lqi=ChZhbGluaGFyIGVzdGV0aWNhIG5hdGFsWhgiFmFsaW5oYXIgZXN0ZXRpY2EgbmF0YWySARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU15TFRScWIxSjNFQUWqARgQASoUIhBhbGluaGFyIGVzdGV0aWNhKAw&ved=2ahUKEwjev-b9suD6AhW6qZUCHUtnCWQQvS56BAgREAE&sa=X&rlst=f#lpc=lpc&rlfi=hd:;si:4487066955448821556,l,ChZhbGluaGFyIGVzdGV0aWNhIG5hdGFsWhgiFmFsaW5oYXIgZXN0ZXRpY2EgbmF0YWySARZoZWFsdGhfYW5kX2JlYXV0eV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU15TFRScWIxSjNFQUWqARgQASoUIhBhbGluaGFyIGVzdGV0aWNhKAw;mv:[[-5.7663639,-35.170171599999996],[-5.8905359,-35.219927399999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </S.SchedulingMapContainer>
      </G.SectionContent>
    </S.SchedulingContainer>
  );
};

export default Scheduling;
